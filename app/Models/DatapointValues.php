<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class DatapointValues extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'app_datapoints_values';

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
        'datapoint_id',
        'value',
        'time',
        'date'
    ];

 }
