<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\UploadedImage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UploadedImageController extends Controller
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
    public function create(Product $product, $id)
    {
        $productImages = UploadedImage::where('product_id', '=', $id)->get();

        $productId = $id;

        return Inertia::render(
            'UploadedImages/Create',
            [
                'product_id' => $productId,
                'images' => $productImages
            ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $id)
    {

        if($request->hasFile('filename')){
            // dd($request);
            $request->validate([
                'images.*' => 'mimes:jpg,png,jpeg|max:5000'
            ], [
                'images.*.mimes' => 'The file should be in one of the formats: jpg, png and jpeg.'
            ]);

            $userId = Auth::id();

            $product = Product::withTrashed()->find($id);
            
            foreach($request->file('filename') as $file)
            {
                $path = $file->store('images','public');

                $product->images()->save(new UploadedImage([
                    'filename' => $path,
                    'by_user_id' => $userId
                ]));
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        return Inertia::render('UploadedImages/Show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UploadedImage $uploadedImage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UploadedImage $uploadedImage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $uploadedImage = UploadedImage::find($id);
        
        Storage::disk('public')->delete($uploadedImage->filename);
        $uploadedImage->delete();
    }
}
