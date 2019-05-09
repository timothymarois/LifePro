<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'app_notes';

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
        'description',
        'date'
    ];

 }
