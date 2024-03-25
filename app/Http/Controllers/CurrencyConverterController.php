<?php

namespace App\Http\Controllers;

use App\Models\CurrencyConverter;
use Illuminate\Http\Request;

class CurrencyConverterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $result = CurrencyConverter::all();

        return response()->json(['result' => $result], 200);
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
    public function store(Request $request, CurrencyConverter $currencyConverter)
    {
        $currencyConverter->create(
            $request->validate([
                'code' => 'required|string:25|unique:currency_converters',
                'name' => 'required|string:50',
                'value' => 'integer',
            ])
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(CurrencyConverter $currencyConverter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CurrencyConverter $currencyConverter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CurrencyConverter $currencyConverter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CurrencyConverter $currencyConverter)
    {
        //
    }
}
