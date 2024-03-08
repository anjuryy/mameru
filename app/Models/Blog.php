<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Blog extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'blog',
        // 'categorize',
        'image',
    ];

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

}
