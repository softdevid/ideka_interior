<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Kategori/KategoriIndex', [
            'title' => 'Kategori',
            'kategori' => Kategori::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Kategori/KategoriAdd', [
            'title' => 'Tambah Kategori',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $slug = Str::slug($request->namaKategori);
        $request->validate(['slug' => 'unique:kategoris', 'namaKategori' => 'required']);

        Kategori::create(['namaKategori' => $request->namaKategori, 'slug' => $slug]);
        return redirect('/admin/kategori')->with(['message' => 'Berhasil menambah']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function show(Kategori $kategori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function edit(Kategori $kategori)
    {
        return Inertia::render('Admin/Kategori/KategoriEdit', [
            'title' => 'Edit Kategori',
            'kategori' => $kategori,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kategori $kategori)
    {
        $slug = Str::slug($request->namaKategori);
        if ($kategori->slug != $slug) {
            $rule['slug'] = 'unique';
        }

        $rule['namaKategori'] = 'required';

        $request->validate($rule);

        $kategori->update([
            'namaKategori' => $request->namaKategori,
            'slug' => $slug
        ]);
        return redirect('/admin/kategori')->with(['data' => 'Berhasil mengubah']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kategori $kategori)
    {
        $kategori->delete();
        return redirect('/admin/kategori');
    }
}
