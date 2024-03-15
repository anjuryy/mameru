<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::with(
            ['features' => function ($features_query) 
                { 
                    $features_query->limit(4); 
                }
            , 
            'sections' =>function ($section_query)
                {
                    $section_query->limit(6)->with('sectionItems');
                }
            ])
        ->get();

        // $category = DB::table('categories')
        //     ->join('featureds', 'categories.id', '=', 'featureds.category_id')
        //     ->select('featureds.name as featureds_name','categories.name as categories_name')
        //     ->get();

        return Inertia::render('Shop/Index',
        [
           'category' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
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
