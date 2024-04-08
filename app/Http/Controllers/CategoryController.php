<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $category_list = Category::paginate(5)->withQueryString();

        if($request->expectsJson())
        {
            return response()->json($category_list);
        }
        else
        {
            return Inertia::render('Category/Index', [
                'category_list' => $category_list
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->user()->categories()->create(
            $request->validate([
                'name' => 'string|required|max:50',
            ])
        );

        if($request->expectsJson())
        {
            return response()->json($validated);
        }
        else
        {
            return redirect()->route('management.index')->with('success', 'Successfully added!');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
        $category = Category::find($id);

        return Inertia::render('Category/Edit', [ 'category' => $category ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $category->update(
            $request->validate([
                'name' => 'string|required|max:50'
            ])
        );

        return redirect()->route('management.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
