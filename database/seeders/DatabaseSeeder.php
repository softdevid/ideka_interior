<?php

namespace Database\Seeders;

use App\Models\Profil;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Profil::create([
            'namaPerusahaan' => 'Ideka Desain Interior',
            'deskripsiPerusahaan' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore cum, facere temporibus vero reprehenderit expedita mollitia quasi fugiat? Soluta maiores quam omnis nemo incidunt veniam atque debitis minima aut aliquid. \n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore cum, facere temporibus vero reprehenderit expedita mollitia quasi fugiat? Soluta maiores quam omnis nemo incidunt veniam atque debitis minima aut aliquid.',
            'alamat' => 'Kalikabong, Purbalingga',
            'maps' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro hic officia commodi nostrum amet dolorum nulla distinctio maxime sapiente ex, suscipit recusandae animi doloremque nesciunt libero omnis iure est?',
            'email' => 'idekainterior@gmail.com',
            'noHp' => '6287864705664',
            'linkInstagram' => 'https://www.instagram.com/',
            'linkTwitter' => 'https://twitter.com/',
            'linkFacebook' => 'https://www.facebook.com/',
            'logoImgName' => '-',
            'logoImgUrl' => '-',
        ]);
    }
}
