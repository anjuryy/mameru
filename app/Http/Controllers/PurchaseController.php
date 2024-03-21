<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Purchase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $purchases = Auth::user()
            ->purchases()
            ->with('products.images')
            ->get();

        return Inertia::render(
            'Shop/Checkout',
            [
                'purchases' => $purchases
            ]
        );
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
    public function store(Request $request, $id)
    {
        // ddd();
        $product = Product::find($id);

        $userId = Auth::id();

        $validated = $request->validate([
            'quantity' => 'required|integer',
        ]);

        // dd($validated['quantity']);
        $product->purchases()->create([
                'quantity' => $validated['quantity'],
                'by_user_id' => $userId
        ]);

        return Redirect::back()->with('success','Successfully added to your cart');
    }

    /**
     * Display the specified resource.
     */
    public function show(Purchase $purchase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Purchase $purchase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Purchase $purchase)
    {
        $purchase->delete();
    }
}
