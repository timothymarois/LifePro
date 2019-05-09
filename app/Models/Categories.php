<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'app_categories';

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
        'type',
        'icon',
        'order',
        'protected'
    ];

 }
