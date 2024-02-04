<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePortfoliosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->text('deskripsi');
            $table->string('imgName1');
            $table->string('imgUrl1')->nullable();
            $table->string('imgName2')->nullable();
            $table->string('imgUrl2')->nullable();
            $table->string('imgName3')->nullable();
            $table->string('imgUrl3')->nullable();
            $table->string('imgName4')->nullable();
            $table->string('imgUrl4')->nullable();
            $table->string('imgName5')->nullable();
            $table->string('imgUrl5')->nullable();
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
        Schema::dropIfExists('portfolios');
    }
}
