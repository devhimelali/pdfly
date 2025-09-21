<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Services\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('services', ServiceController::class)->except('show');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
