<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("/distrik", "distrikControl@index");
Route::post("/perusahaan", "perusahaanControl@index");
Route::post("/investasi", "InvestasiControl@index");
Route::post("/layanan/izin", "IzinControl@index");
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
