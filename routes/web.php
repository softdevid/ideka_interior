<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\KontakController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/', [HomeController::class, 'index']);
Route::get('/layanan', [HomeController::class, 'layanan']);
Route::get('/profil', [HomeController::class, "tentang_kami"]);
// Route::prefix('/tentang')->group(function () {
// });

// Route::get('/admin/dashboard', [AdminController::class, 'index']);
Route::group([
    'prefix' => '/admin',
    // 'middleware' => ['auth']
], function () {
    Route::get('dashboard', [AdminController::class, 'index']);
    Route::resource('profil', ProfilController::class);
    Route::resource('layanan', LayananController::class);
    Route::resource('banner', BannerController::class);
    Route::resource('kontak', KontakController::class);
});

require __DIR__ . '/auth.php';
