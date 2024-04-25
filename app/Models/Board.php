<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Board extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'description', 'image', 'color', 'by_user_id'];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'by_user_id');
    }

    public function columns(): HasMany
    {
        return $this->hasMany(Column::class, 'board_id');
    }

    public function board_members(): HasMany
    {
        return $this->hasMany(BoardMember::class, 'board_id');
    }
}
