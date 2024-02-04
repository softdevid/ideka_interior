<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Portfolio/PortfolioIndex', [
            'title' => 'Portfolio',
            'portfolio' => Portfolio::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Portfolio/PortfolioAdd', [
            'title' => 'Tambah Portfolio',
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
        // dd($request->imgName1);
        Portfolio::create([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'imgName1' => $request->imgName1,
            'imgUrl1' => $request->imgUrl1,
            'imgUrl2' => $request->imgUrl2,
            'imgName2' => $request->imgName2,
            'imgUrl3' => $request->imgUrl3,
            'imgName3' => $request->imgName3,
            'imgUrl4' => $request->imgUrl4,
            'imgName4' => $request->imgName4,
            'imgUrl5' => $request->imgUrl5,
            'imgName5' => $request->imgName5,
        ]);

        return redirect('/admin/portfolio')->with(['message' => 'Berhasil menambah']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function show(Portfolio $portfolio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function edit(Portfolio $portfolio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Portfolio $portfolio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function destroy(Portfolio $portfolio)
    {
        if ($portfolio->imgName1) {
            Cloudinary::destroy($portfolio->imgName1);
        }
        if ($portfolio->imgName2) {
            Cloudinary::destroy($portfolio->imgName2);
        }
        if ($portfolio->imgName3) {
            Cloudinary::destroy($portfolio->imgName3);
        }
        if ($portfolio->imgName4) {
            Cloudinary::destroy($portfolio->imgName4);
        }
        if ($portfolio->imgName5) {
            Cloudinary::destroy($portfolio->imgName5);
        }

        $portfolio->delete();
        return redirect('/admin/portfolio')->with(['message' => 'Berhasil menghapus']);
    }
}
