<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Shop/MyShop');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Shop/Create');
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
    public function show(ShopModel $shopModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ShopModel $shopModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ShopModel $shopModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ShopModel $shopModel)
    {
        //
    }
}
