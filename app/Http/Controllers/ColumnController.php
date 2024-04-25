<?php

namespace App\Http\Controllers;

use App\Models\Column;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ColumnController extends Controller
{
    public function destroy($id)
    {
        // dd($id);
        Column::where('temp_id', $id)->delete();

        // return redirect(route('kanban.index'))->with('success','Successfully Deleted');
    }

    public function getColumn($id)
    {
        // dd($board_id);
        $column = Column::latest('id')->select('title', 'id')->where('deleted_at', '=', null)->first();

        return response()->json(['result' => $column], 200);
    }

    public function updateColumnValue(Request $request, $id)
    {
        // Validator::make($request->all(),[
        //     'title' => 'string|required',
        //     'card_id' => 'required|string'
        // ])->validate();
        // dd($request->all());
        $column = Column::where('temp_id', $id);

        $column->update([
            'title' => $request->title
        ]);
    }
}
