<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Kategori;
use App\Models\Layanan;
use App\Models\Portfolio;
use App\Models\Profil;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render("Home/Index", [
            "title" => "Selamat Datang | Interior House",
            'profil' => Profil::first(),
            'layanan' => Layanan::with('gambar')->paginate(10),
            'portfolio' => Portfolio::paginate(10),
            'banner' => Banner::all(),
        ]);
    }
    public function layanan()
    {
        return Inertia::render("Home/Layanan", [
            "title" => "Layanan | Interior House",
            'layanan' => Layanan::with('gambar')->get(),
            'kategori' => Kategori::all(),
        ]);
    }
    public function tentang_kami()
    {
        return Inertia::render("Home/Profile", [
            "title" => "Tentang Kami | Interior House",
        ]);
    }
    public function detail_layanan(Layanan $layanan, $slug)
    {
        return Inertia::render("Home/Detail", [
            "title" => "Detail Layanan | Interior House",
            'layanan' => $layanan::with('gambar')->where('slug', $slug)->first(),
            'profil' => Profil::first(),
        ]);
    }
    public function kontak_kami()
    {
        return Inertia::render("Home/KontakKami", [
            "title" => "Kontak Kami | Interior House",
        ]);
    }
    public function hasil_kerja()
    {
        return Inertia::render("Home/HasilKerja", [
            "title" => "Hasil Kerja | Interior House",
            'portfolio' => Portfolio::with('kategori')->get(),
            'kategori' => Kategori::all(),
        ]);
    }

    public function detail_hasil_kerja($judul)
    {
        return Inertia::render('Home/DetailPortfolio', [
            'title' => 'Detail Portfolio',
            'portfolio' => Portfolio::where('judul', $judul)->first(),
            'profil' => Profil::first(),
        ]);
    }
}
