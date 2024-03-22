<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;

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

        $products = Product::with('images')->get();

        $purchases = Auth::user()
            ->purchases()
            ->with('products.images')
            ->get();
        // $category = DB::table('categories')
        //     ->join('featureds', 'categories.id', '=', 'featureds.category_id')
        //     ->select('featureds.name as featureds_name','categories.name as categories_name')
        //     ->get();

        return Inertia::render('Shop/Index',
        [
           'category' => $categories,
           'products' => $products,
           'purchases' => $purchases
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
    public function show($id)
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

        $products = Product::with('images')->get();

        $product = Product::with('images')->withTrashed()->find($id);

        $purchases = Auth::user()
            ->purchases()
            ->with('products.images')
            ->get();

        return Inertia::render(
            'Shop/Show',
            [
                'product_detail' => $product,
                'category' => $categories,
                'products' => $products,
                'purchases' => $purchases
            ]
        );
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

    public function filter()
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
        
        $encryptedCategories = $categories->map(function ($category) {
            // Encrypting category ID
            $category->encrypted_id = Crypt::encryptString($category->id);
    
            // Encrypting feature IDs
            $category->features->each(function ($feature) {
                $feature->encrypted_id = Crypt::encryptString($feature->id);
            });
    
            // Encrypting section IDs
            $category->sections->each(function ($section) {
                $section->encrypted_id = Crypt::encryptString($section->id);
    
                // Encrypting section item IDs
                $section->sectionItems->each(function ($item) {
                    $item->encrypted_id = Crypt::encryptString($item->id);
                });
            });
    
            return $category;
        });
    
        return Inertia::render('Shop/Sample', ['categories' => $encryptedCategories]);
    }
}
