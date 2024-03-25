<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Inertia\Inertia;
use App\Models\BlogImage;
use App\Models\BlogsComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Crypt;
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

        $blogEncryptedId = $blogs->map(function ($blog){
            $blog->encrypted_id = Crypt::encryptString($blog->id);
            return $blog;
        });

        return Inertia::render('Blog/Index', [
            'blog_list' => $blogs
        ]);
    }

    public function myblog(Blog $blog)
    {
        $blogs = Auth::user()
                ->blogs()
                // ->with('images')
                ->paginate(6)
                ->withQueryString();

        $blogsEncryptedId = $blogs->map(function ($blog) {
            $blog->encrypted_id = Crypt::encryptString($blog->id);
        });

        return Inertia::render('Blog/MyBlogs', [
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
            // 'image' => 'image'
        ])->validate();

            // ddd($request->file->extension());
        // $fileName = time().'.'.$request->file->extension();
        $fileName = '';

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

        return redirect(route('blog.index'))->with('success','Successfully Added');
        // return redirect(route('blog.index'));
    }

    public function edit(Request $request, $id)
    {
        $decrypted_id = Crypt::decryptString($id);

        $blog_info = Auth::user()
                    ->blogs()
                    ->with('images')
                    ->find($decrypted_id);

        $blog_info['encrypted_id'] = Crypt::encryptString($blog_info->id);

        return Inertia::render('Blog/Edit',
            [
                'blog_info' => $blog_info
            ]
        );
    }

    public function update(Request $request, $id)
    {
        $decypted_id = Crypt::decryptString($id);

        Validator::make($request->all(), [
            'title' => 'required|string|max:25',
            'blog' => 'required|string',
            // 'image' => 'image'
        ])->validate();

        // dd($request);
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads'), $fileName);

            // Handle file upload logic here

            $request->user()->blogs()->where('id', $decypted_id)->update([

                'title' => $request->title,
                'blog' => $request->blog,
                'image' => $fileName

            ]);
        } else {
            $request->user()->blogs()->where('id', $decypted_id)->update([

                'title' => $request->title,
                'blog' => $request->blog

            ]);
        }

        return redirect(route('blog.index'))->with('success','Successfully Edited');
        // return redirect(route('blog.index'));

    }

    public function show(Request $request, $id)
    {
        // $blog = Blog::with('owner')->with('comments')->find($id);
        // $blogComment = $blog->comments();
        $decrypted_id = Crypt::decryptString($id);

        $comments = BlogsComment::select('*')
        ->join('users', 'blogs_comments.by_user_id', '=', 'users.id')
        ->where('blogs_comments.blog_id', '=', $decrypted_id)
        ->get();

        $blog_info = Blog::find($decrypted_id);

        $blog_info['encrypted_id'] = $id;

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
        $decypted_id = Crypt::decryptString($id);

        $blog = Blog::find($decypted_id);

        $offer = $blog->comments()->save(
            BlogsComment::make(
                $request->validate([
                    'comment' => 'required|string|max:100'
                ])
            )->user()->associate($request->user())
        );
    }

    public function destroy(Request $request, $id)
    {
        $decrypted_id = Crypt::decryptString($id);

        Blog::where('id', $decrypted_id)->delete();

        return redirect(route('blog.index'))->with('success','Successfully Deleted');
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        // return Redirect::to('/');
    }
}
