<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs_comments', function (Blueprint $table) {
            $table->id();
            $table->string('comment');
            $table->foreignIdFor(
                'App\Models\Blog',
                'blog_id'
            );
            $table->foreignIdFor(
                'App\Models\User',
                'by_user_id'
            );
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs_comment');
    }
};
