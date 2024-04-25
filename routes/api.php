<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColumnController;
use App\Http\Controllers\CurrencyConverterController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('task/searchBar', [TodoController::class, 'searchBar']);
Route::get('ticket/searchBar', [TicketController::class, 'searchBar']);
Route::get('product/searchBar', [ProductController::class, 'searchBar']);
Route::get('user/searchBar', [UserController::class, 'searchBar']);

Route::get('column/{id}', [ColumnController::class, 'getColumn'])->name('getColumn');

Route::apiResource('/currency_converter', CurrencyConverterController::class);

Route::middleware('auth:sanctum')->group(function(){
    Route::apiResource('category', CategoryController::class);
});
