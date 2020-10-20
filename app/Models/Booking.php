<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class Booking extends Model
{
    use HasFactory;
    protected $fillable = ['from', 'to'];

    public function bookable()
    {
        return $this->belongsTo(Bookable::class);
    }

    public function reviews()
    {
        return $this->hasOne(Review::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function scopeBetweenDates(Builder $qb, $from, $to)
    {
        $result = $qb
            ->where('to', '>=', $from)
            ->where('from', '<=', $to)
            ;

        return $result;
    }

    public static function findByReviewKey(string $reviewKey): ?Booking
    {
        return static::where('review_key', $reviewKey)
                ->with('bookable')
                ->get()
                ->first();
    }

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($booking){
            $booking->review_key = Str::uuid();
        });
    }
}
