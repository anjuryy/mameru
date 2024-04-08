<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Validate if user exists
        if (!Auth::attempt($validated)) {
            return response()->json([
                'message' => 'Invalid Login',
            ], 401);
        }

        $user = User::where('email', $validated['email'])->first();

        // Return Key
        return response()->json([
            'access_token' => $user->createToken('api_token')->plainTextToken,
            'token_type' => 'Bearer'
        ]);
    }
}
