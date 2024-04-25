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
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignIdFor(
                App\Models\Board::class,
                'board_id'
            );
            $table->foreignIdFor(
                App\Models\Column::class,
                'column'

            );
            $table->foreignIdFor(
                App\Models\User::class,
                'by_user_id'
            );
            $table->foreignIdFor(
                App\Models\User::class,
                'updated_by'
            )->nullable();
            $table->string('card_id');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
