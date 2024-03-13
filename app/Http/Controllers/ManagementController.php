<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Featured;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManagementController extends Controller
{
    public function index()
    {
        $category = Category::all();
        $featured = Featured::all();

        return Inertia::render(
            'Management/Index', 
            [ 
                'category' => $category,
                'featured' => $featured
            ]);
    }
}
