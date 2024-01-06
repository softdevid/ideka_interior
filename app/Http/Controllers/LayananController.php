<?php

namespace App\Http\Controllers;

use App\Models\Layanan;
use App\Models\Gambar;
use Illuminate\Http\Request;
use Inertia\Inertia;
// use Cloudinary\Cloudinary;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Facades\DB;

class LayananController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $data = DB::table('layanans')
        // ->join('gambars', 'gambars.layananId', '=', 'layanans.id')
        // ->select('layanans.*', 'gambars.* as gambar')
        // ->get();
        // dd($data);
        // dd(Layanan::with('gambar')->get());
        return Inertia::render('Admin/Layanan/Index', [
            'title' => 'Layanan',
            'layanan' => Layanan::with('gambar')->get(),
        ]);
    }

    public function data() {
        $data = Layanan::get();
        // dd($data);
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Layanan/Add', [
            'title' => 'Tambah Layanan',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->image);
        $layanan = Layanan::create([
            'namaLayanan' => $request->input("values.namaLayanan"),
            'deskripsi' => $request->input("values.deskripsi"),
            'hrgTerrendah' => $request->input('values.hrgTerrendah'),
            'hrgTertinggi' => $request->input("values.hrgTertinggi"),
            // 'imgName' => $request->imgName,
            // 'imgUrl' => $request->imgUrl,
            'videoName' => $request->input("values.videoName"),
            'videoUrl' => $request->input("values.videoUrl"),
        ]);

        // dd($layanan);

        foreach($request->input('image') as $d) {
            $g = [
                'layananId'  => $layanan->id,
                'imgName' =>  $d['public_id'],
                'imgUrl' => $d['url'],
            ];
            Gambar::create($g);

        }

        // return response()->json(['data' => 'Berhasil menambah']);
        return redirect('/admin/layanan')->with(['data' => 'Berhasil menambah']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Layanan $layanan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Layanan $layanan)
    {
        // $d = DB::table('layanans')
        // ->join('gambars', 'gambars.layananId', '=', 'layanans.id')
        // ->where('layanans.id', $layanan->id)
        // ->select('layanans.*', 'gambars.* as gambar')
        // ->get();
        $gambar = Gambar::where('layananId', $layanan->id)->get();
        // dd($gambar);
        $layanan = $layanan;


        return Inertia::render('Admin/Layanan/Edit', [
            'title' => 'Edit Layanan',
            'layanan' => $layanan,
            'gambar' => $gambar,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Layanan $layanan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Layanan $layanan)
    {
        $gambar = Gambar::where('id', $layanan->id)->get();
        foreach ($gambar as $key => $g) {
            Cloudinary::destroy($g->imgName);
        }
        if($layanan->videoName != '') {
            Cloudinary::destroy($layanan->videoName, ["resource_type" => "video"]);
        }

        $layanan->delete();
        // return response()->json(['data' => 'Berhasil menghapus']);
        return redirect('/admin/layanan')->with(['data' => 'Berhasil menghapus']);
    }
}
