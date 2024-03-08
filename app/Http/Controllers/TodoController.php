<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function index()
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
        $todo_list = Auth::user()
                    ->todos()
                    ->paginate(5)
                    ->withQueryString();

        return Inertia::render('Todo/Index', ['todo_list' => $todo_list]);
    }

    public function create(): Response
    {
        return Inertia::render('Todo/Create');
    }

    public function store(Request $request)
    {
        $request->user()->todos()->create(
            $request->validate([
                'name' => 'required|string|max:50',
                'task_desc' => 'max:255',
                'deadline' => 'date'
            ])
        );

        return redirect(route('todo.index'));
    }

    public function edit($id)
    {
        $todo = Auth::user()
                ->todos()
                ->paginate(5)
                ->withQueryString()
                ->find($id);
        // $todo = Todo::find($id);
        return Inertia::render('Todo/Edit', [ 'todo_data' => $todo]);
    }

    public function update(Request $request, Todo $todo)
    {
        $todo->update(
            $request->validate([
                'name' => 'required|string|max:50',
                'task_desc' => 'max:255',
                'deadline' => 'date',
                'completed' =>  'boolean'
            ])
        );

        // return redirect(route('todo.index'));
    }

    public function destroy(Request $request, $id)
    {

        Todo::where('id', $id)->delete();

        return redirect(route('todo.index'));
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        // return Redirect::to('/');
    }
}
