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

        $products = Product::with('images')->get();

        $purchases = Auth::user()
            ->purchases()
            ->with('products.images')
            ->get();

        $user_currency_setting = Auth::user()
            ->user_currency()->with('currency_converters')
            ->latest()
            ->get();

        // dd($user_currency_setting);

        return Inertia::render('Shop/Index',
        [
           'category' => $encryptedCategories,
           'products' => $products,
           'purchases' => $purchases,
           'user_currency_setting' => $user_currency_setting
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

        $user_currency_setting = Auth::user()
            ->user_currency()->with('currency_converters')
            ->latest()
            ->get();

        return Inertia::render(
            'Shop/Show',
            [
                'product_detail' => $product,
                'category' => $categories,
                'products' => $products,
                'purchases' => $purchases,
                'user_currency_setting' => $user_currency_setting
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

    public function filter($id)
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

        $products = Product::with('images')->where('products.category', '=', $id)->get();

        $user_currency_setting = Auth::user()
            ->user_currency()->with('currency_converters')
            ->latest()
            ->get();

        $purchases = Auth::user()
            ->purchases()
            ->with('products.images')
            ->get();

        return Inertia::render('Shop/Index',
        [
            'category' => $encryptedCategories,
            'products' => $products,
            'purchases' => $purchases,
            'user_currency_setting' => $user_currency_setting
        ]);
        // dd($categories);

        // return Inertia::render('Shop/Sample', ['categories' => $encryptedCategories]);
    }

    public function searchBar()
    {
        $todo = Product::get();

        return response()->json(['result' => $todo], 200);
    }
}
