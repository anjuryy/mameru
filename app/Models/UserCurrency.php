<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserCurrency extends Model
{
    use HasFactory;

    protected $fillable = [
        'by_user_id',
        'currency_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'by_user_id');
    }

    public function currency_converters(): BelongsTo
    {
        return $this->belongsTo(CurrencyConverter::class, 'currency_id');
    }
}
