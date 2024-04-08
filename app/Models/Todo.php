<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Todo extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'task_desc',
        'deadline',
        'completed'

    ];

    protected $hidden = ['id', 'by_user_id'];

    public function owner() : BelongsTo {
        return $this->belongsTo(
            \App\Models\User::class,
            'by_user_id'
        );
    }

    public function scopeFilter(Builder $query, array $filters)
    {
        return $query->when(
            $filters['name'] ?? false,
            fn ($query, $value) => $query->where('name', 'LIKE', '%' . $value . '%')
        );
    }
}
