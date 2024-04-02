<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Section;
use App\Models\Category;
use Illuminate\Http\Request;

class SectionController extends Controller
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
            'Section/Create',
            [
                'category' => $category
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Section $section)
    {

        $validated = $request->validate([
            'category_id' => 'required',
            'name' => 'required|max:50'
        ]);

        $category = Category::findOrFail($validated['category_id']);

        $section = $category->sections()->create([
            'name' => $validated['name']
        ]);

        return redirect()->route('management.index')->with('success', 'Successfully added!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Section $section)
    {
        $section = Section::find($section);
        $category = Category::get();

        return Inertia::render(
            'Section/Edit',
            [
                'section' => $section,
                'category' => $category
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Section $section)
    {
        $validate = $request->validate([
            'category_id' => 'required',
            'name' => 'required|max:50'
        ]);

        $section->whereKey($section->getKey())->update($validate);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        //
    }
}
