<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render("Home/Index", [
            "title" => "Selamat Datang | Interior House",
        ]);
    }
    public function layanan()
    {
        return Inertia::render("Home/Layanan", [
            "title" => "Layanan | Interior House",
        ]);
    }
    public function tentang_kami()
    {
        return Inertia::render("Home/Profile", [
            "title" => "Tentang Kami | Interior House",
        ]);
    }
    public function detail_layanan()
    {
        return Inertia::render("Home/Detail", [
            "title" => "Detail Layanan | Interior House",
        ]);
    }
}
