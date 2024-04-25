<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Inertia\Inertia;
use App\Models\Board;
use App\Models\BoardMember;
use App\Models\Column;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class BoardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $boards = Auth::user()->boards()->select('boards.*');
        $boards2 = BoardMember::select('boards.*')
            ->join('boards', 'board_members.board_id', '=', 'boards.id')
            ->where('board_members.by_user_id', '=', Auth::id());

        // Combine the two queries using the union method
        $combinedBoards = $boards->union($boards2)->paginate(9)->withQueryString();

        $boardEncryptedId = $combinedBoards->map( function ($board){
            $board->encrypted_id = Crypt::encryptString($board->id);
            return $board;
        });

        return Inertia::render(
            'Board/Index',
            [
                'boards' => $combinedBoards
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Board/Create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => 'string|required|max:50',
            'description' => 'string',
            'image' => 'image',
            'color' => 'string'
        ]);

        $fileName = '';

        if($request->hasFile('image')){
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads'), $fileName);
        }

        $color = '';

        if($request->color){
            $color = $request->color ;
        }

        $request->user()->boards()->create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $fileName,
            'color' => $color
        ]);

        return redirect(route('board.index'))->with('success', 'Board Successfully Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Board $board)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $decrypted_id = Crypt::decryptString($id);

        $board = Auth::user()->boards()->findOrFail($decrypted_id);

        $boardMembers = BoardMember::select('users.id', 'users.name', 'users.email')
            ->join('users', 'board_members.by_user_id', '=', 'users.id')
            ->where('board_members.board_id', '=', $decrypted_id)
            ->get();

        $boardMemberEncryptedId = $boardMembers->map( function ($board_members){
            $board_members['encrypted_id'] = Crypt::encryptString($board_members->id);
            return $board_members;
        });

        $board['encrypted_id'] = Crypt::encryptString($board->id);

        // dd($board);
        return Inertia::render(
            'Board/Edit',
            [
                'board' => $board,
                'board_members' => $boardMembers
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // dd($request);
        $decrypted_id = Crypt::decryptString($id);

        Validator::make($request->all(),
            [
                'title' => 'string|required|max:50',
                'description' => 'string|required',
                'color' => 'string'
            ]
        )->validate();

        $fileName = '';

        if($request->hasFile('image')){
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('boards'), $fileName);
        }

        $color = '';

        if($request->color){
            $color = $request->color ;
        }

        $board = Board::findOrFail($decrypted_id);

        $board->update([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $fileName,
            'color' => $color
        ]);

        return redirect(route('board.index'))->with('success', 'Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $decrypted_id = Crypt::decryptString($id);

        Board::where('id', $decrypted_id)->delete();

        return redirect(route('board.index'))->with('success','Successfully Deleted');
    }

    public function kanban($id)
    {
        $decrypted_id = Crypt::decryptString($id);

        $board = Board::select('columns.title', 'columns.id', 'columns.temp_id')
                ->join('columns', 'boards.id', '=', 'columns.board_id')
                ->where('boards.id' ,'=', $decrypted_id)
                ->where('columns.deleted_at', '=', null)
                ->orderBy('boards.id', 'ASC')
                ->get();

        $board_members = BoardMember::select('users.email', 'users.name')
                    ->join('users', 'board_members.by_user_id', '=', 'users.id')
                    ->where('board_members.board_id', '=', $decrypted_id)
                    ->get();

        $card = Card::join('users', 'cards.updated_by', '=', 'users.id')->where('board_id', '=', $decrypted_id)->get();

        return Inertia::render(
            'Kanban/Index',
            [
                'board' => $board,
                'card' => $card,
                'board_encrypted_id' => $id,
                'board_members' => $board_members
            ]
        );
    }

    public function storeColumn(Request $request, $id)
    {
        // dd($request->all());
        $decrypted_id = Crypt::decryptString($id);

        $board = Board::findOrFail($decrypted_id);

        $column = $board->columns()->save(
            Column::make(
                $request->validate([
                    'title' => 'required|string|max:25',
                    'temp_id' => 'required|string'
                ])
            )->user()->associate($request->user())
        );
    }

    public function deleteBoardMember($board_id, $id)
    {
        $decrypted_board_id = Crypt::decryptString($board_id);
        $decrypted_id = Crypt::decryptString($id);

        $deleted = DB::table('board_members')
            ->where('board_id', '=', $decrypted_board_id)
            ->where('by_user_id', '=', $decrypted_id)
            ->delete();

        return redirect(route('board.edit', $board_id))->with('danger', 'Board member successfully deleted');
    }
}
