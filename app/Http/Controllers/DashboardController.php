<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $todo_list = Auth::user()
                    ->todos()
                    ->get();
                    
        return Inertia::render(
            'Dashboard',
            [
                'todo_list' => $todo_list
            ]
        );
    }
}
