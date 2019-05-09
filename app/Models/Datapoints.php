<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Datapoints extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'app_datapoints';

    /**
    * Indicates if the model should be timestamped.
    *
    * @var bool
    */
    public $timestamps = true;

    /**
    * Fillable fields
    *
    * @var array
    */
    public $fillable = [
        'user_id',
        'category_id',
        'name',
        'description',
        'type',
        'dose_amount',
        'dose_scale',
        'value_format',
        'order',
        'protected'
    ];

 }
