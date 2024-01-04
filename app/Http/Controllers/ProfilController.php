<?php

namespace App\Http\Controllers;

use App\Models\Profil;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Profil/Index', [
            'title' => 'Profil',
            'profil' => Profil::first(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Profil $profil)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Profil $profil)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Profil $profil)
    {
        $profil->update([
            'namaPerusahaan' => $request->namaPerusahaan,
            'email' => $request->email,
            'noHp' => $request->noHp,
            'alamat' => $request->alamat,
            'maps' => $request->maps,
            'linkInstagram' => $request->linkInstagram,
            'linkTwitter' => $request->linkTwitter,
            'linkFacebook' => $request->linkFacebook,
            'logoImgName' => $request->logoImgName ?? '',
            'logoImgUrl' => $request->logoImgUrl ?? '',
        ]);

        return response()->json(['data' => 'Berhasil diubah']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profil $profil)
    {
        //
    }
}
