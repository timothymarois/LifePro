<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBase extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');

            $table->string('name',32);
            $table->string('type',24);
            $table->string('icon',32)->default('');

            $table->integer('order')->default(0);
            $table->integer('protected')->default(0);

            $table->timestamps();
        });

        Schema::create('app_datapoints', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');
            $table->integer('category_id');

            $table->string('name',32);
            $table->string('description',155)->default('');
            $table->string('type',32)->default('ACTION');

            $table->string('dose_amount',32)->default('');
            $table->string('dose_scale',32)->default('');
            $table->string('value_format',24)->default('binary');

            $table->integer('order')->default(0);
            $table->integer('protected')->default(0);

            $table->timestamps();
        });

        Schema::create('app_datapoints_values', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');
            $table->integer('datapoint_id');

            $table->decimal('value')->default(0.00);
            $table->string('time',32)->default('none');

            $table->date('date');
            $table->timestamps();
        });

        Schema::create('app_events', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');

            $table->string('name',32);
            $table->string('description',155)->default('');
            $table->date('start_date');
            $table->date('end_date');

            $table->integer('protected')->default(0);

            $table->timestamps();
        });

        Schema::create('app_notes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');

            $table->string('description',255)->default('');
            $table->date('date');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_categories');
        Schema::dropIfExists('app_datapoints');
        Schema::dropIfExists('app_datapoints_values');
        Schema::dropIfExists('app_events');
        Schema::dropIfExists('app_notes');
    }
}
