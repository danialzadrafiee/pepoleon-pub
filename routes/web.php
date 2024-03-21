<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GatewayController;
use Illuminate\Support\Facades\Route;


Route::auto("/", GatewayController::class);
Route::auto("/dashboard", DashboardController::class);
Route::get('/webhook', function () {
    $output = shell_exec('/bin/bash /var/www/pepoleon.developerpie.com/public/pull.sh');
    return response($output, 200)
                  ->header('Content-Type', 'text/plain');
});
