<?php

namespace App\Http\Controllers;

use App\Models\Layanan;
use App\Models\Gambar;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
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
        return Inertia::render('Admin/Layanan/Index', [
            'title' => 'Layanan',
            'layanan' => Layanan::with('gambar')->get(),
        ]);
    }

    public function data()
    {
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
            'kategori' => Kategori::get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->image);
        $layanan = Layanan::create([
            'idKategori' => $request->input("values.idKategori"),
            'namaLayanan' => $request->input("values.namaLayanan"),
            'slug' => Str::slug($request->input("values.namaLayanan")),
            'deskripsi' => $request->input("values.deskripsi"),
            'hrgTerrendah' => $request->input('values.hrgTerrendah'),
            'hrgTertinggi' => $request->input("values.hrgTertinggi"),
            'videoName' => $request->input("values.videoName"),
            'videoUrl' => $request->input("values.videoUrl"),
        ]);

        // dd($layanan);

        foreach ($request->input('image') as $d) {
            $g = [
                'layananId'  => $layanan->id,
                'imgName' =>  $d['imgName'],
                'imgUrl' => $d['imgUrl'],
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
        // dd($layanan->with('gambar')->first());
        return Inertia::render('Admin/Layanan/Edit', [
            'title' => 'Edit Layanan',
            'layanan' => $layanan->with('gambar')->findOrFail($layanan->id),
            'kategori' => Kategori::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Layanan $layanan)
    {
        // dd($request->all());
        $request->validate([
            'values.namaLayanan' => 'required',
            'values.deskripsi' => 'required',
            'values.hrgTerrendah' => 'required',
            'values.hrgTertinggi' => 'required',
            'values.videoName' => 'required',
        ]);

        if ($request->input('values.videoName') != $layanan->videoName) {
            Cloudinary::destroy($layanan->videoName, ["resource_type" => "video"]);
        }

        $layanan->update([
            'idKategori' => $request->input('values.idKategori'),
            'namaLayanan' => $request->input('values.namaLayanan'),
            'deskripsi' => $request->input('values.deskripsi'),
            'hrgTerrendah' => $request->input('values.hrgTerrendah'),
            'hrgTertinggi' => $request->input('values.hrgTertinggi'),
            'videoName' => $request->input('values.videoName'),
            'videoUrl' => $request->input('values.videoUrl'),
            'slug' => Str::slug($request->input('values.namaLayanan')),
        ]);

        foreach ($request->input('image') as $value) {
            $id = isset($value['id']) ? $value['id'] : null;

            if ($value['imgName'] == '') {
                // Hapus record gambar jika kosong
                $gbr = Gambar::find($id);
                Cloudinary::destroy($gbr->imgName);
                $gbr->delete();
            } else {
                // Update atau buat entri baru
                Gambar::updateOrCreate(
                    ['id' => $id],
                    [
                        'layananId' => $layanan->id,
                        'imgName' => $value['imgName'],
                        'imgUrl' => $value['imgUrl'] ?? null,
                    ]
                );
            }
        }

        return redirect('/admin/layanan')->with(['message' => 'Berhasil diupdate']);
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
        if ($layanan->videoName != '') {
            Cloudinary::destroy($layanan->videoName, ["resource_type" => "video"]);
        }

        $layanan->delete();
        // return response()->json(['data' => 'Berhasil menghapus']);
        return redirect('/admin/layanan')->with(['message' => 'Berhasil menghapus']);
    }
}
