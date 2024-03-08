<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Message extends Model
{
    use HasFactory;

    public function owner() : BelongsTo {
        return $this->belongsTo(
            \App\Models\User::class,
            'by_user_id'
        );
    }

    public function messagecontents(): HasMany
    {
        return $this->hasMany(MessageContent::class, 'message_id');
    }
}
