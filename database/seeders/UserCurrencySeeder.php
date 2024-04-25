<?php

namespace Database\Seeders;

use App\Models\UserCurrency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserCurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserCurrency::create(['by_user_id' => '1', 'currency_id' => '1']);
    }
}
