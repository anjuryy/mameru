<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Card extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'board_id', 'column', 'card_id','by_user_id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'by_user_id');
    }

    public function boards(): BelongsTo
    {
        return $this->belongsTo(Board::class, 'board_id');
    }

    public function columns(): BelongsTo
    {
        return $this->belongsTo(Column::class, 'column_id');
    }
}
