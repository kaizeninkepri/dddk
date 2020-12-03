<?php

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
Auth::routes();
Route::get('/pages/login', 'ApplicationController');
Route::get('/auth/logout', 'ApplicationController@logoutS');
Route::post('/login/submit', 'ApplicationController@SubmitLogin');
Route::middleware(['auth'])->group(function () {
    Route::get('/{any}', 'ApplicationController')->where('any', '.*');
});
