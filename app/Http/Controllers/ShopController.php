<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\SectionItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $shop = Auth::user()
                ->products()
                ->paginate(10)
                ->withQueryString();

        return Inertia::render('Shop/MyShop', [ 'shop' => $shop ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $sectionItems = SectionItem::join('sections', 'section_items.section_id', '=', 'sections.id')
            ->join('categories', 'sections.category_id', '=', 'categories.id')
            ->select('section_items.*', 'categories.name as under_name')
            ->get();

        return Inertia::render('Shop/Create', [ 'sectionItems' => $sectionItems ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->user()->products()->create(
            $request->validate([
                'name' => 'required|string|max:50',
                'description' => 'required|string|max:50',
                'category' => 'required',
                'quantity' => 'required|max:999',
                'price' => 'required|min:1|max:100000',
            ])
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
