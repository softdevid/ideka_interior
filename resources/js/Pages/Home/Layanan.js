import Main from "@/Layouts/Home/Main";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Aos from "aos";

const Layanan = (props) => {
    console.log(props)
    useEffect(() => {
        Aos.refresh();
    }, []);

    const tabsData = [
        {
            label: "Semua",
            title: "Semua Layanan Kami",
            idKategori: 0,
        },
        ...props.kategori.map((data) => {
          return {
                label: data.namaKategori,
                title: data.namaKategori,
                idKategori: data.id
            }
        })

    ];

    const [kategori, setKategori] = useState(0);

    const filteredLayanan = props.layanan.filter(
      (layanan) =>
        layanan.idKategori === kategori
    );

    return (
        <>
            <Head title={props.title} />
            <div className="container mx-auto my-4">
                <div className="container  md:mx-auto md:py-4 py-2 px-4 mb-4">
                    <p className="md:text-3xl text-xl mb-3 font-bold">
                        Layanan Kami
                    </p>

                    <div>
                        <div className="flex space-x-5 border-b items-center justify-center">
                            {/* Loop through tab data and render button for each. */}
                            {tabsData.map((tab, idx) => {
                                return (
                                    <button
                                    key={idx}
                                    className={`py-2 border-b-4 transition-colors duration-300 ${
                                        tab.idKategori === kategori
                                            ? "border-[#7f7d7a]"
                                            : "border-transparent hover:border-[#a9a6a2]"
                                    }`}
                                    // Change the active tab on click and perform another action.
                                    onClick={() => {
                                        setKategori(tab.idKategori);
                                    }}
                                >
                                    {tab.title}
                                </button>
                                );
                            })}
                        </div>
                        {/* Show active tab content. */}
                        <div className="py-4">
                            <p className="text-4xl mb-3 font-bold text-center">
                                {tabsData[kategori].title}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mb-4">
                        {kategori === 0 ?
                            props.layanan.map((cards, card) => {
                                return (
                                    <div className="flex items-center justify-center">
                                        <div
                                            key={card}
                                            className="max-w-xs bg-white rounded-lg shadow-lg mb-4"
                                            data-aos="zoom-in"
                                            data-aos-duration="1000"JJ
                                            data-aos-delay=""
                                        >
                                            <img src={cards.gambar ? cards.gambar[0].imgUrl : '#'} />
                                            <div className="p-5">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                                    {cards.namaLayanan}
                                                </h5>

                                                <p className="mb-3 font-normal text-slate-800">
                                                {cards.deskripsi.length > 30
                                                ? `${cards.deskripsi.substring(0, 30)}...`
                                                : cards.deskripsi}
                                                </p>
                                                <Link
                                                    href={`/layanan/${cards.slug}`}
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7f7d7a] rounded-lg hover:bg-[#a9a6a2] focus:ring-4 focus:outline-none focus:ring-[#e5e3e0]"
                                                >
                                                    Selanjutnya
                                                    &nbsp;
                                                    <ArrowRightIcon className="w-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }) : (
                                filteredLayanan.map((cards, card) => {
                                    return (
                                        <div className="flex items-center justify-center">
                                            <div
                                                key={card}
                                                className="max-w-xs bg-white rounded-lg shadow-lg mb-4"
                                                data-aos="zoom-in"
                                                data-aos-duration="1000"
                                                data-aos-delay=""
                                            >
                                                <img src={cards.gambar ? cards.gambar[0].imgUrl : '#'} />
                                                <div className="p-5">
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                                        {cards.namaLayanan}
                                                    </h5>

                                                    <p className="mb-3 font-normal text-slate-800">
                                                    {cards.deskripsi.length > 50
                                                    ? `${cards.deskripsi.substring(0, 50)}...`
                                                    : cards.deskripsi}
                                                    </p>
                                                    <a
                                                        href="#"
                                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7f7d7a] rounded-lg hover:bg-[#a9a6a2] focus:ring-4 focus:outline-none focus:ring-[#e5e3e0]"
                                                    >
                                                        Selanjutnya
                                                        &nbsp;
                                                        <ArrowRightIcon className="w-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
Layanan.layout = (page) => <Main children={page} />;
export default Layanan;
