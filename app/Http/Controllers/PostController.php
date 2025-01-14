<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Resources\PostResource;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $query = Post::query();

        if (request("city")) {
            $query->where("city", "like", "%" . request("city") . "%");
        }
        if (request("loctype")) {
            $query->where("loctype", request("loctype"));
        }

        if (request("price")) {
            $query->where('price', '<=', request("price"));
        }

        $posts = $query->paginate(8)->onEachSide(1);

        return inertia("Post/Index", [
            "posts" => PostResource::collection($posts),
            'queryParams' => request()->query()?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia("Post/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $request)
    {
        $data = $request->validated();
        $image = $data['image'];
        $data['img_path'] = $image->store('post/' . Str::random(), 'public');
        $data['createdby'] = Auth::id();
        Post::create($data);

        return to_route('post.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return inertia('Post/Show', ['post' => new PostResource($post),]); // Pass the post to the Explore page
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return inertia('Post/Edit', ['post' => new PostResource($post),]); // Pass the post to the Explore page
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostRequest  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $data = $request->validated();
        if (isset($data['image'])) {
            if ($post->img_path) {
                Storage::disk('public')->deleteDirectory(dirname($post->img_path));
            }
            $image = $data['image'];
            $data['img_path'] = $image->store('post/' . Str::random(), 'public');
        }
        $post->update($data);

        return to_route('post.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        if ($post->img_path) {
            Storage::disk('public')->deleteDirectory(dirname($post->img_path));
        }
        return to_route('post.index');
    }
}
