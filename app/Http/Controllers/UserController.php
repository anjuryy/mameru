<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{
    public function getChatUsers(){
        $users= User::where('id','<>',auth()->id())->paginate(50);
        return $users;
    }

    public function index()
    {
        // $users = User::where('id', '!=', '2')->paginate(5)->withQueryString();
        $users = User::where('id', '!=', 1)->paginate(5)->withQueryString();

        $encryptedUserlist = $users->map(function ($user) {
            // Encrypting todo ID
            $user->encrypted_id = Crypt::encryptString($user->id);
            return $user;
        });

        return Inertia::render(
            'User/Index',
            [
                'user_lists' => $users
            ]
        );
    }

    public function searchBar()
    {
        $user = Auth::user()
            ->paginate(5)
            ->withQueryString();

            return response()->json(['result' => $user], 200);
    }
}
