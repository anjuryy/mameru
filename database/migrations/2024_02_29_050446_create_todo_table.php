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
        Schema::create('todos', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('task_desc')->nullable();
            $table->boolean('completed')->default(false);
            $table->boolean('email_sent')->default(false);
            $table->dateTime('deadline')->nullable();
            $table->foreignIdFor(
                \App\Models\User::class,
                'by_user_id'
            )->constrained('users');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('todo');
    }
};
