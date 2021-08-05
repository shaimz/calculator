<?php

namespace App\Http\Controllers;

use Api\CategoryController;
use Api\IngredientController;
use Api\GroupController;
use Api\FoodController;
use Api\FoodIngredientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('category',CategoryController::class);
Route::resource('ingredient',IngredientController::class);
Route::resource('group',GroupController::class);
Route::resource('food',FoodController::class);
Route::resource('food-ingredient',FoodIngredientController::class);
