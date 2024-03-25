<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CurrencyConverter extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'value',
        'by_user_id'
    ];

    public function user_currency(): BelongsTo
    {
        return $this->belongsTo(UserCurrency::class, 'currency_id');
    }
}
