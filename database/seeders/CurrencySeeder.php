<?php

namespace Database\Seeders;

use App\Models\CurrencyConverter;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CurrencyConverter::create(['code' => 'PHP', 'name' => 'Philippine Peso', 'value' => '56', 'symbol' => '₱']);
        CurrencyConverter::create(['code' => 'USD', 'name' => 'US Dollar', 'value' => '0.018', 'symbol' => '$']);
    }
}
