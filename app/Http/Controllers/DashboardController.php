<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Todo;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Report;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $todo_list = Auth::user()
                    ->todos()
                    ->get();

        $user_count = User::count();
        $task_count = Todo::count();
        $blog_count = Blog::count();
        $product_count = Product::count();
        $report_count = Report::count();

        return Inertia::render(
            'Dashboard',
            [
                'todo_list' => $todo_list,
                'user_count' => $user_count,
                'task_count' => $task_count,
                'blog_count' => $blog_count,
                'product_count' => $product_count,
                'report_count' => $report_count,
            ]
        );
    }
}
