<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Column extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['temp_id','title','board_id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'by_user_id');
    }

    public function boards(): BelongsTo
    {
        return $this->belongsTo(Board::class, 'board_id');
    }

    public function cards(): HasMany
    {
        return $this->hasMany(Card::class, 'column_id');
    }
}
