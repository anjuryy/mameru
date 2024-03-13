<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use App\Models\Featured;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class FeaturedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $category = Category::get();
        return Inertia::render(
            'Featured/Create', 
            [ 
                'category' => $category 
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $validatedData = $request->validate([
            'category_id' => 'required',
            'name' => 'string|required|max:50',
            'url' => 'nullable|string'
        ]);
        
        $category = Category::findOrFail($validatedData['category_id']); // Get the Category instance
        
        $feature = $category->features()->create([
            'name' => $validatedData['name'],
            'url' => $validatedData['url'] ?? null
        ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Featured $featured)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Featured $featured)
    {
        $category = Category::get();
        $featured = Featured::find($featured);

        return Inertia::render(
            'Featured/Edit',
            [
                'category' => $category,
                'featured' => $featured
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Featured $featured)
    {
        $validatedData = $request->validate([
            'category_id' => 'required',
            'name' => 'string|required|max:50',
            'url' => 'nullable|string'
        ]);
    
        // Update the attributes of the $featured model instance

        $updated = $featured->whereKey($featured->getKey())->update([
            'category_id' => $validatedData['category_id'],
            'name' => $validatedData['name'],
            'url' => $validatedData['url'] ?? null
        ]);

        // $updatedQuery = $featured->newQuery()->whereKey($featured->getKey())->update([
        //     'category_id' => $validatedData['category_id'],
        //     'name' => $validatedData['name'],
        //     'url' => $validatedData['url'] ?? null
        // ]);

        // // Dump the generated SQL update query
        // dump($updatedQuery->toSql());
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Featured $featured)
    {
        //
    }
}
