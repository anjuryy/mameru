<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Blog extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'blog',
        // 'categorize',
        'image',
    ];

    protected $hidden = ['id'];

    public function owner() : BelongsTo {
        return $this->belongsTo(
            \App\Models\User::class,
            'by_user_id'
        );
    }

    public function images(): HasMany
    {
        return $this->hasMany(BlogImage::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(BlogsComment::class, 'blog_id');
    }

    protected function name(): Attribute

    {

        return Attribute::make(
            get: fn ($value) => url('uploads/'.$value),
        );

    }

}
