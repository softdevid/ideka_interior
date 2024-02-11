<?php

namespace App\Http\Controllers;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'title' => 'Dashboard',
        ]);
    }

    public function deleteImage(Request $request)
    {
        // dd($request->all());
        Cloudinary::destroy($request->imgName);
        return response()->json(['message' => 'Berhasil']);
    }

    public function deleteVideo(Request $request)
    {
        // dd($request->all());
        Cloudinary::destroy($request->videoName, ["resource_type" => "video"]);
        return response()->json(['message' => 'Berhasil']);
    }
}
