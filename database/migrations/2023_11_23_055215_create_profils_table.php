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
        Schema::create('profils', function (Blueprint $table) {
            $table->id();
            $table->string('namaPerusahaan');
            $table->text('deskripsiPerusahaan');
            $table->text('alamat');
            $table->text('maps');
            $table->string('email');
            $table->string('noHp'); //wa
            $table->string('linkInstagram')->nullable();
            $table->string('linkTwitter')->nullable();
            $table->string('linkFacebook')->nullable();
            $table->string('logoImgName')->nullable();
            $table->string('logoImgUrl')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profils');
    }
};
