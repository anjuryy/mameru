<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function todos() : HasMany
    {
        return $this->hasMany(Todo::class,'by_user_id');
    }

    public function blogs() : HasMany
    {
        return $this->hasMany(Blog::class,'by_user_id');
    }

    public function messages(): HasMany
    {
        return $this->hasMany(Message::class, 'by_user_id');
    }

    public function categories() : HasMany
    {
        return $this->hasMany(Category::class,'by_user_id');
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'by_user_id');
    }

    public function images(): HasMany
    {
        return $this->hasMany(UploadedImage::class, 'by_user_id');
    }

    public function purchases(): HasMany
    {
        return $this->hasMany(Purchase::class, 'by_user_id');
    }

    public function user_currency(): HasMany
    {
        return $this->hasMany(UserCurrency::class, 'by_user_id');
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    public function hasRole($role)
    {
        return $this->roles()->where('name', $role)->exists();
    }

    public function reports(): HasMany
    {
        return $this->hasMany(Report::class, 'by_user_id');
    }
}
