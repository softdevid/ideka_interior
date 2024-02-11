<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('layanans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idKategori');
            $table->string('namaLayanan');
            $table->string('slug');
            $table->text('deskripsi');
            $table->integer('hrgTerrendah');
            $table->integer('hrgTertinggi');
            $table->string('imgName')->nullable();
            $table->string('imgUrl')->nullable();
            $table->string('videoName')->nullable();
            $table->string('videoUrl')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('layanans');
    }
};
