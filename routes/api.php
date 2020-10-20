<?php

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

Route::apiResource('bookables', 'Api\BookableController')->only(['index', 'show']);
Route::get('bookables/{bookable_id}/availability', 'Api\BookableAvailabilityController')
    ->name('bookables.availability.show');
Route::get('bookables/{bookable_id}/reviews', 'Api\BookableReviewController')
    ->name('bookables.reviews.index');
Route::get('bookables/{bookable}/price', 'Api\BookablePriceController')    
    ->name('bookables.price.show');

Route::apiResource('reviews', 'Api\ReviewController')->only(['show', 'store']);
Route::get('booking-by-review/{reviewKey}', 'Api\BookingByReviewController')
    ->name('bokking.by-review.show');
    
    
// Route::get('bookable/{id}', function (Request $request, int $id){
//     return Bookable::findOrFail($id);
// });

// Route::get('bookables', function (Request $request){
//     return Bookable::all();
// });
