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
                ->withTrashed()
                ->join('section_items', 'products.category', '=', 'section_items.id')
                ->join('sections', 'section_items.section_id', '=', 'sections.id')
                ->join('categories', 'sections.category_id', '=', 'categories.id')
                ->select('products.*','section_items.name as under_name','categories.name as category_name')
                ->withCount('images')
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
    public function edit(Product $product, $id)
    {
        $product = Auth::user()
            ->products()
            ->find($id);

        $shop = SectionItem::join('sections', 'section_items.section_id', '=', 'sections.id')
            ->join('categories', 'sections.category_id', '=', 'categories.id')
            ->select('section_items.*', 'categories.name as under_name')
            ->get();

        return Inertia::render( 'Shop/Edit', [ 'shop' => $shop, 'product' => $product ] );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product, $id)
    {
        $request->user()->products()->where('id', $id)->update(
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
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // dd($product);
        $product = Product::find($id);
        $product->deleteOrFail();
    }

    public function restore($id)
    {
        $product = Product::withTrashed()->find($id);
        // dd($product);
        $product->restore();
    }
}
