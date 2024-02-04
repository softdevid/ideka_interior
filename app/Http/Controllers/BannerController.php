<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Banner/BannerIndex', [
            'title' => 'Banner',
            'cloudName' => env('CLOUDINARY_NAME'),
            'uploadPresetName' => env('CLOUDINARY_UPLOAD_PRESET_NAME'),
            'banner' => Banner::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Banner/BannerAdd', [
            'title' => 'Tambah Banner',
            'cloudName' => env('CLOUDINARY_NAME'),
            'uploadPresetName' => env('CLOUDINARY_UPLOAD_PRESET_NAME'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Banner::create([
            'imgName' => $request->imgName,
            'imgUrl' => $request->imgUrl
        ]);

        return redirect('/admin/banner')->with(['data' => 'Berhasil']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Banner $banner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Banner $banner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Banner $banner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Banner $banner)
    {
        Cloudinary::destroy($banner->imgUrl);
        $banner->delete();
        return redirect('/admin/banner')->with(['message' => 'Berhasil Menghapus']);
    }
}
