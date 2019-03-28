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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


/*
|--------------------------------------------------------------------------
| ACCOUNT
|--------------------------------------------------------------------------
|
| Edit, Create and View Account Details
|
*/

// get account details
Route::get('account/{id}', 'api/account@index');
// edit account details
Route::post('account/{id}', 'api/account@edit');
// create account
Route::put('account', 'api/account@create');


/*
|--------------------------------------------------------------------------
| CATEGORIES
|--------------------------------------------------------------------------
|
| Edit, Create and View Categories Details
|
*/

// get category list
Route::get('categories', 'api/category@list');
// get category details
Route::get('category/{id}', 'api/category@index');
// edit category details
Route::post('category/{id}', 'api/category@edit');
// create category
Route::put('category', 'api/category@create');


/*
|--------------------------------------------------------------------------
| DATA POINTS
|--------------------------------------------------------------------------
|
| Edit, Create and View datapoints Details
|
*/

// get datapoint list
Route::get('datapoints', 'api/datapoint@list');
// get datapoint details
Route::get('datapoint/{id}', 'api/datapoint@index');
// edit datapoint details
Route::post('datapoint/{id}', 'api/datapoint@edit');
// create datapoint
Route::put('datapoint', 'api/datapoint@create');
