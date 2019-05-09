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
    protected $table = 'app_events';

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
        'name',
        'description',
        'start_date',
        'end_date',
        'protected'
    ];

 }
