<?php

namespace App\Http\Controllers;

use App\Models\Section;
use App\Models\SectionItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionItemController extends Controller
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
        $section = Section::get();

        return Inertia::render(
            'Item/Create',
            [
                'section' => $section
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'section_id' => 'required',
            'name' => 'required|max:50',
            'url' => 'nullable|string'
        ]);

        $section = Section::findOrFail($validate['section_id']);

        $sectionItem = $section->sectionItems()->create([
            'name' => $validate['name'],
            'url' => $validate['url'] ?? null
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(SectionItem $sectionItem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SectionItem $sectionItem)
    {
        $section = Section::get();
        $sectionItem = SectionItem::get();

        return Inertia::render(
            'Item/Edit',
            [
                'section' => $section,
                'sectionItem' => $sectionItem
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SectionItem $sectionItems, $id)
    {
        $validate = $request->validate([
            'section_id' => 'required',
            'name' => 'required|max:50',
            'url' => 'nullable|string'
        ]);

        // $sectionItem->whereKey($sectionItem->getKey())->update($validate);
        ddd($updated = $sectionItems->whereKey($id)->update([
            'section_id' => $validate['section_id'],
            'name' => $validate['name'],
            'url' => $validate['url'] ?? null
        ]));
        // $updated = $sectionItem->whereKey($sectionItem->getKey())->update($validate);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SectionItem $sectionItem)
    {
        //
    }
}
