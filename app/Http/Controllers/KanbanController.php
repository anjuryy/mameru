<?php

namespace App\Http\Controllers;

use App\Models\BoardMember;
use App\Models\User;
use App\Notifications\AddMemberNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;

class KanbanController extends Controller
{
    public function index()
    {
        return Inertia::render('Kanban/Index');
    }

    public function addMember(Request $request, $id){
        $email = Crypt::encryptString($request->email);
        $decrypted_email = Crypt::decryptString($email);

        $exists = User::where('email', '=', $decrypted_email)->exists();

        if(!$exists)
        {
            return redirect(route('board.kanban', $id))->with('danger', 'This email does not exist in our system');
        }
        // dd($email);
        $user = User::where('email', '=', $decrypted_email)->get();

        $userName = $request->user()->name;

        $data = [
            'email' => $email,
            'name' => $userName,
            'board_id' => $id
        ];
        // ddd($user);

        Notification::send($user, new AddMemberNotification($data));

        return redirect(route('board.kanban', $id))->with('success', 'Invitation sent');
    }

    public function acceptInvitation($email, $id){
        $decrypted_email = Crypt::decryptString($email);
        $decrypted_id = Crypt::decryptString($id);

        $userId = User::select('id')->where('email', '=', $decrypted_email)->first(); // Assuming you expect only one user

        $exists = BoardMember::where('board_id', $decrypted_id)
                      ->where('by_user_id', $userId->id)
                      ->exists();

        if ($exists) {
            return redirect(route('board.index'))->with('success', 'Board already added to your board');
        } else {
            BoardMember::create([
                'board_id' => $decrypted_id,
                'by_user_id' => $userId->id // Accessing the id property of the user object
            ]);

            return redirect(route('board.index'))->with('success', 'Successfully added to your board');
        }
    }

}
