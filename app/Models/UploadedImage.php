<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UploadedImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'filename',
        'product_id',
        'by_user_id'
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'by_user_id');
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function purchases(): BelongsTo
    {
        return $this->belongsTo(Purchase::class, 'product_id');
    }
}
