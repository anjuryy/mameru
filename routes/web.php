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
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\NotificationSeenController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SectionItemController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\TaskCronController;
use App\Http\Controllers\TicketController;
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
        // 'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/anjurypatawaran', [ProfileController::class, 'index'])->name('profile.index');
Route::get('/', [ProfileController::class, 'index'])->name('profile.index');

Route::get('/email/verify', function () {
    return view('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');

Route::get('/myroute', function () {
    return view('mytemplate');
});

Route::get('/cron', [TaskCronController::class, 'cron'])->name('cron');

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
    Route::resource('myshop', ShopController::class)->middleware(['verified']);
    Route::put('myshop/{id}/restore', [ShopController::class,'restore'])->name('myshop.restore');

    Route::resource('uploaded_images', UploadedImageController::class)->only(['edit','update','destroy']);

    Route::get('uploaded_images/{id}', [UploadedImageController::class,'create'])->name('uploaded_images.create');
    Route::post('uploaded_images/{id}/store', [UploadedImageController::class,'store'])->name('uploaded_images.store');
    Route::put('uploaded_images/{id}/restore', [UploadedImageController::class,'restore'])->name('uploaded_images.restore');

    Route::post('purchase/{id}/store', [PurchaseController::class,'store'])->name('purchase.store');
    Route::resource('purchase', PurchaseController::class)->only(['destroy','index']);

    Route::group(['middleware' => ['auth', 'role:admin']],function () {
        Route::get('management', [ManagementController::class, 'index'])->name('management.index');
        Route::get('users',[UserController::class, 'index'])->name('users.index');

        Route::get('ticket', [TicketController::class, 'index'])->name('ticket.index');
        Route::get('ticket/{id}/show', [TicketController::class, 'show'])->name('ticket.show');
        Route::put('ticket/update/{id}', [TicketController::class, 'update'])->name('ticket.update');

    });

    Route::get('notification', [NotificationController::class, 'index'])->name('notification.index');

    // Route::put('notification/{notification}/seen', [NotificationSeenController::class, 'seen'])->name('notification.seen');

    Route::group(['middleware' => ['auth', 'role:user', 'verified']],function () {
        Route::resource('report', ReportController::class);
        Route::post('/report/update/{id}', [ReportController::class, 'update'])->name('report.update');
    });

    Route::put(
        'notification/{notification}/seen',
        NotificationSeenController::class
        )->name('notification.seen');


    // SEARCH
    // Route::get('/todo/search', [UserController::class, 'search'])->name('users.search');

});

require __DIR__.'/auth.php';
