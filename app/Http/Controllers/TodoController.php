<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Notifications\TaskNotification;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{
    public function index(Request $request)
    {
        // $todos_list = Todo::get();
        // return Inertia::render('Todo/Index', [ 'listings' => Todo::get() ]);
        // dd(Todo::paginate(5));
        // return inertia(
        //     'Todo/Index',
        //     [
        //         'todo_list' => Todo::paginate(5)
        //     ]
        // );
        // $todo_list = Todo::latest()->paginate(5)->withQueryString();
        $filters = $request->only([
            'name',
            ...$request->only(['by','order'])
        ]);

        $todolist = Auth::user()
                    ->todos()
                    ->filter($filters)
                    ->orderBy('deadline', 'asc')
                    ->orderBy('completed', 'desc')
                    ->paginate(5)
                    ->withQueryString();

        // Encrypt the IDs in each todo item
        $encryptedTodolist = $todolist->map(function ($todo) {
            // Encrypting todo ID
            $todo->encrypted_id = Crypt::encryptString($todo->id);
            return $todo;
        });

        return Inertia::render('Todo/Index',
            [
                'filters' => $filters,
                'todolist' => $todolist
            ]
        );
    }

    public function create(): Response
    {
        return Inertia::render('Todo/Create');
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        Notification::send($user, new TaskNotification($request->all()));
        // dd($request->input('deadline'));

        $date = date('Y-m-d H:i:s', strtotime($request->input('deadline')));

        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:50',
            'task_desc' => 'max:255',
            'deadline' => 'required|date'
        ]);

        $request->user()->todos()->create([
            'name' => $request->input('name'),
            'task_desc' => $request->input('task_desc'),
            'deadline' => $date,
        ]);

        // return redirect(route('todo.index'));
        return redirect(route('todo.index'))->with('success','Successfully Added');
    }

    public function edit($id)
    {
        $decrypted_id = Crypt::decryptString($id);

        $todo = Auth::user()
                ->todos()
                ->paginate(5)
                ->withQueryString()
                ->find($decrypted_id);

        $todo['encrypted_id'] = Crypt::encryptString($todo->id);

        return Inertia::render('Todo/Edit', [ 'todo_data' => $todo]);
    }

    public function update(Request $request, $id)
    {
        $decrypted_id = Crypt::decryptString($id);

        $todo = Todo::findOrFail($decrypted_id);

        $date = date('Y-m-d H:i:s', strtotime($request->input('deadline')));

        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:50',
            'task_desc' => 'max:255',
            'deadline' => 'required|date',
            'completed' =>  'boolean'
        ]);

        $todo->update([
            'name' => $request->input('name'),
            'task_desc' => $request->input('task_desc'),
            'deadline' => $date,
            'completed' => $request->input('completed')
        ]);

        return redirect(route('todo.index'))->with('success','Successfully Edited');
    }

    public function destroy(Request $request, $id)
    {
        $decrypted_id = Crypt::decryptString($id);

        Todo::where('id', $decrypted_id)->delete();

        return redirect(route('todo.index'))->with('success','Successfully Deleted');
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        // return Redirect::to('/');
    }

    public function searchBar()
    {
        $todo = Auth::user()
            ->todos()
            ->paginate(5)
            ->withQueryString();

            return response()->json(['result' => $todo], 200);
    }
}
