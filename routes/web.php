<?php

use App\Http\Controllers\Api\ExportPDF;
use App\Http\Controllers\Api\FoodIngredientController;
use App\Http\Controllers\Api\MenuItemController;
use App\Http\Controllers\Api\UserController;
use App\Models\Category;
use App\Models\Ingredient;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::prefix('api')->group(function(){
    Route::post('login', [UserController::class, 'login']);
    Route::post('register', [UserController::class, 'register']);
    Route::get('logout', [UserController::class, 'logout'])->middleware('auth');
    //Delete items
    Route::delete('food-ingredient',[FoodIngredientController::class,'destroy']);
    Route::delete('menu-item',[MenuItemController::class,'destroy']);
    Route::delete('ingredient',[Ingredient::class,'destroy']);
    Route::delete('category',[Category::class,'destroy']);

    Route::post('export',[ExportPDF::class,'export']);
});

Route::post('/pdf',[ExportPDF::class,'index']);


Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');
