<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlogImage extends Model
{
    use HasFactory;

    protected $fillable = ['filename', 'blog_id'];

    public function blog(): BelongsTo
    {
        return $this->belongsTo(Blog::class);
    }

    public function getSrcAttribute ()
    {
        return asset("storage/{$this->filename}");
    }
}
