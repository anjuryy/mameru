<?php

namespace App\Http\Controllers;

use App\Models\Board;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class CardController extends Controller
{
    public function storeCard(Request $request, $board_id, $column_id, $card_id)
    {
        $decrypted_board_id = Crypt::decryptString($board_id);

        $board = Board::findOrFail($decrypted_board_id);

        // dd($request->all());
        Validator::make($request->all(),[
            'title' => 'string|required',
            'card_id' => 'required|string'
        ])->validate();

        $request->user()->cards()->create([
            'title' => $request->title,
            'board_id' => $decrypted_board_id,
            'column' => $column_id,
            'card_id' => $card_id
        ]);
    }

    public function updateCard(Request $request, $id)
    {
        // Validator::make($request->all(),[
        //     'title' => 'string|required',
        //     'card_id' => 'required|string'
        // ])->validate();
        // dd($request->all());
        $card = Card::where('card_id', $id);

        $card->update([
            'column' => $request->column,
            'updated_by' => Auth::id()
        ]);
    }

    public function updateCardValue(Request $request, $id)
    {
        // Validator::make($request->all(),[
        //     'title' => 'string|required',
        //     'card_id' => 'required|string'
        // ])->validate();
        // dd($request->all());
        $card = Card::where('card_id', $id);

        $card->update([
            'title' => $request->title
        ]);
    }

    public function destroy($id)
    {
        // dd($id);
        Card::where('card_id', $id)->delete();

        // return redirect(route('kanban.index'))->with('success','Successfully Deleted');
    }
}
