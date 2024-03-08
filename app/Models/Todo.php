<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Todo extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'task_desc',
        'deadline',
        'completed'

    ];

    public function owner() : BelongsTo {
        return $this->belongsTo(
            \App\Models\User::class,
            'by_user_id'
        );
    }
}
