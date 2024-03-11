<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Inertia\Inertia;
use App\Models\BlogImage;
use App\Models\BlogsComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function index(Blog $blog)
    {
        // dd($blog->load(['images']));
        $blogs = Blog::
                // ->with('images')
                paginate(6)
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

        Validator::make($request->all(), [
            'title' => 'required|string|max:25',
            'blog' => 'required|string',
            'image' => 'image'

        ])->validate();

            // ddd($request->file->extension());
        // $fileName = time().'.'.$request->file->extension();

        // $request->file->move(public_path('uploads'), $fileName);
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads'), $fileName);
            // Handle file upload logic here
        }

        $request->user()->blogs()->create([

            'title' => $request->title,
            'blog' => $request->blog,
            'image' => $fileName

        ]);

        return redirect(route('blog.index'));
    }

    public function edit(Request $request, $id)
    {
        $blog_info = Auth::user()
                    ->blogs()
                    ->with('images')
                    ->find($id);

        return Inertia::render('Blog/Edit',
            [
                'blog_info' => $blog_info
            ]
        );
    }

    public function update(Request $request, $id)
    {
        Validator::make($request->all(), [
            'title' => 'required|string|max:25',
            'blog' => 'required|string',
            'image' => 'image'
        ])->validate();

        // dd($request);
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads'), $fileName);

            // Handle file upload logic here

            $request->user()->blogs()->where('id', $id)->update([

                'title' => $request->title,
                'blog' => $request->blog,
                'image' => $fileName

            ]);
        } else {
            $request->user()->blogs()->where('id', $id)->update([

                'title' => $request->title,
                'blog' => $request->blog

            ]);
        }

        return redirect(route('blog.index'));

    }

    public function show(Request $request, $id)
    {
        // $blog = Blog::with('owner')->with('comments')->find($id);
        // $blogComment = $blog->comments();
        $comments = BlogsComment::select('*')
        ->join('users', 'blogs_comments.by_user_id', '=', 'users.id')
        ->where('blogs_comments.blog_id', '=', $id)
        ->get();

        $blog_info = Blog::find($id);

        return Inertia::render('Blog/Show',
            [
                'blog_info' => $blog_info,
                'comments' => $comments
            ]
        );
    }

    public function storeComment(Request $request, $id)
    {
        // $request->user()->blogs()->create(
        //     $request->validate([
        //         'comment' => 'required|max:250'
        //     ])
        // );
        $blog = Blog::find($id);
        $offer = $blog->comments()->save(
            BlogsComment::make(
                $request->validate([
                    'comment' => 'required|string|max:100'
                ])
            )->user()->associate($request->user())
        );
    }
}
