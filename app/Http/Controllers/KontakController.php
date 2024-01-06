<?php

namespace App\Http\Controllers;

use App\Models\Kontak;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KontakController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Kontak/Index', [
            'title' => 'Kontak',
            'kontak' => Kontak::first(),
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
    public function show(Kontak $kontak)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kontak $kontak)
    {
        return Inertia::render('Admin/Kontak/Edit', [
            'title' => 'Edit',
            'kontak' => $kontak,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kontak $kontak)
    {
        $kontak->update([
            'email' => $request->email,
            'noHp' => $request->noHp,
            'alamat' => $request->alamat,
            'maps' => $request->maps,
        ]);
        return response()->json($kontak);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kontak $kontak)
    {
        //
    }
}
