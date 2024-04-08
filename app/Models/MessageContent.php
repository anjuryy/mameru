<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MessageContent extends Model
{
    use HasFactory;

    public function owner() : BelongsTo {
        return $this->belongsTo(
            \App\Models\Message::class,
            'message_id'
        );
    }
}
