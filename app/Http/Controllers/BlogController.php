<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogImage;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class BlogController extends Controller
{
    public function index(Blog $blog)
    {
        // dd($blog->load(['images']));
        $blogs = Auth::user()
                ->blogs()
                ->with('images')
                ->paginate(6)
                ->withQueryString();

        return Inertia::render('Blog/Index', [
            'blog_list' => $blogs
        ]);
    }

    public function create()
    {
        return Inertia::render('Blog/Create');
    }

    public function store(Blog $blog, Request $request)
    {
        $newBlog = $request->user()->blogs()->create(
            $request->validate([
                'title' => 'required|string|max:25',
                'blog' => 'required|string',
                // 'image' => 'required'
            ])
        );

        if ($request->hasFile('images')) {
            // Iterate over each uploaded file
            foreach ($request->file('images') as $file) {
                // Store the image in the 'images' directory within the 'public' disk
                $path = $file->store('images', 'public');

                // Create a new BlogImage model and associate it with the blog post
                $blogImage = new BlogImage([
                    'filename' => $path,
                ]);

                // Save the association between the blog post and the image
                $newBlog->images()->save($blogImage);
            }
        }

        // return redirect(route('blog.index'));
    }

    public function show(Request $request, $id)
    {
        $blog_info = Auth::user()
                    ->blogs()
                    ->with('images')
                    ->find($id);

        return Inertia::render('Blog/Show',
            [
                'blog_info' => $blog_info
            ]
        );
    }

    public function update(Request $request, $id)
    {
        // Find the blog post
        $updateBlog = $request->user()->blogs()->where('id', $id)->firstOrFail();

        // Validate the request
        $request->validate([
            'title' => 'required|string|max:25',
            'blog' => 'required|string',
        ]);

        // Update the blog post
        $updateBlog->update([
            'title' => $request->input('title'),
            'blog' => $request->input('blog'),
        ]);

        // Check if there are new images to update
        if ($request->hasFile('images')) {
            // Loop through each uploaded image
            foreach ($request->file('images') as $file) {
                // Store the new image
                $path = $file->store('images', 'public');

                // Create a new BlogImage instance
                $blogImage = new BlogImage([
                    'filename' => $path,
                ]);

                // Save the new image association
                $updateBlog->images()->save($blogImage);
            }
        }

        // Update image information if necessary
        if ($request->filled('image_id')) {
            // Find the image to update
            $image = BlogImage::findOrFail($request->input('image_id'));

            // Update image information
            $image->update([
                'filename' => $path, // Update with new filename if necessary
            ]);
        }

    }
}
