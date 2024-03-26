<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FeaturedController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ManagementController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SectionItemController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\UploadedImageController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/anjurypatawaran', [ProfileController::class, 'index'])->name('profile.index');
// Route::get('/', [ProfileController::class, 'index'])->name('profile.index');
Route::get('/myroute', function () {
    return view('mytemplate');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::patch('/profile', [ProfileController::class, 'update_currency'])->name('profile.update_currency');

    Route::get('/chat', [ChatController::class, 'index'])->name('chat');
    Route::get('/chat/{id}', [ChatController::class, 'selectUser'])->name('chat.user');
    Route::post('/send/message', [ChatController::class, 'sendMessage'])->name('send.message');
    Route::get('/chat-users', [UserController::class, 'getChatUsers'])->name('chat-user-list');


    // Route::get('todo/create',[TodoController::class, 'create'])->name('todo.create');
    // Route::get('todo/index',[TodoController::class, 'index'])->name('todo.index');
    // Route::post('todo/store',[TodoController::class, 'store'])->name('todo.store');
    // Route::get('todo/edit/{id}',[TodoController::class, 'edit'])->name('todo.edit');
    // Route::get('todo/update/',[TodoController::class, 'update'])->name('todo.edit');
    // Route::delete('todo/destroy/{id}',[TodoController::class, 'destroy'])->name('todo.destroy');

    Route::resource('todo', TodoController::class);

    Route::resource('blog', BlogController::class);

    Route::post('/blog/update/{id}', [BlogController::class, 'update'])->name('blog.update');
    Route::post('storeComment/{id}', [BlogController::class, 'storeComment'])->name('blog.storeComment');
    Route::get('myblog', [BlogController::class, 'myblog'])->name('blog.myblog');

    Route::resource('product', ProductController::class);
    Route::get('filter/{id}', [ProductController::class, 'filter'])->name('product.filter');

    Route::resource('category', CategoryController::class)->only(['create','store','edit','update']);
    Route::resource('featured', FeaturedController::class)->only(['create','store','edit','update']);
    Route::resource('section', SectionController::class)->only(['create','store','edit','update']);
    Route::resource('item', SectionItemController::class)->only(['create','store','edit','update']);
    Route::resource('myshop', ShopController::class);
    Route::put('myshop/{id}/restore', [ShopController::class,'restore'])->name('myshop.restore');

    Route::resource('uploaded_images', UploadedImageController::class)->only(['edit','update','destroy']);

    Route::get('uploaded_images/{id}', [UploadedImageController::class,'create'])->name('uploaded_images.create');
    Route::post('uploaded_images/{id}/store', [UploadedImageController::class,'store'])->name('uploaded_images.store');
    Route::put('uploaded_images/{id}/restore', [UploadedImageController::class,'restore'])->name('uploaded_images.restore');

    Route::post('purchase/{id}/store', [PurchaseController::class,'store'])->name('purchase.store');
    Route::resource('purchase', PurchaseController::class)->only(['destroy','index']);

    Route::get('management', [ManagementController::class, 'index'])->name('management.index');

    // SEARCH
    // Route::get('/todo/search', [UserController::class, 'search'])->name('users.search');

});

require __DIR__.'/auth.php';
