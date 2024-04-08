<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Report extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title', 
        'image', 
        'comment', 
        'by_user_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'by_user_id');
    }
}
