import Main from "@/Layouts/Home/Main";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

const Layanan = ({ title }) => {
    const { url } = usePage();
    useEffect(() => {
        AOS.refresh();
    }, []);
    return (
        <>
            <Head title={title} />
            <div className="container mx-auto my-4">
                <div className="container  md:mx-auto md:py-4 py-2 px-4 mb-4">
                    <p className="md:text-3xl text-xl mb-3 font-bold">
                        Layanan Kami
                    </p>

                    <div className="mb-4 border-b border-gray-200 bg-gray-100 mx-4 md:mx-0">
                        <ul
                            className="flex flex-row justify-center items-center p-4 space-x-4 -mb-px text-sm font-medium text-center"
                            id="myTab"
                            data-tabs-toggle="#myTabContent"
                            role="tablist"
                        >
                            <li>
                                <Link
                                    href="/interior-design"
                                    className={
                                        url === "/interior-design"
                                            ? "active text-white bg-blue-700 rounded block py-2 px-5 font-bold"
                                            : "text-black hover:text-white hover:bg-blue-700 block py-2 px-5 font-bold"
                                    }
                                    aria-current="page"
                                >
                                    Desain Interior
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/interior-styling"
                                    className={
                                        url === "/interior-styling"
                                            ? "active text-white bg-blue-700 rounded block py-2 px-5 font-bold"
                                            : "text-black hover:text-white hover:bg-blue-700 block py-2 px-5 font-bold"
                                    }
                                    aria-current="page"
                                >
                                    Gaya Interior
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/3d-visualization"
                                    className={
                                        url === "/3d-visualization"
                                            ? "active text-white bg-blue-700 rounded block py-2 px-5 font-bold"
                                            : "text-black hover:text-white hover:bg-blue-700 block py-2 px-5 font-bold"
                                    }
                                    aria-current="page"
                                >
                                    Visual 3D
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent" className="mx-4 md:mx-0 mb-4">
                        <div
                            className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                            id="semua"
                            role="tabpanel"
                            aria-labelledby="semua-tab"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <p className="text-3xl mb-3 font-bold text-center">
                                VISI & MISI
                            </p>
                            <p className="font-semibold text-base leading-6 text-gray-600 ">
                                Menjadi mitra kreatif yang menginspirasi melalui
                                teknologi dan seni, mewujudkan inovasi tak
                                terbatas dalam pembuatan aplikasi, gambar
                                digital, dan desain grafis.
                            </p>
                            <br />
                            <p className="font-semibold text-base leading-6 text-gray-600 ">
                                Misi saya meliputi:
                            </p>
                            <br />
                            <ul className="list-decimal mb-4 mx-4">
                                <li className="md:text-xl text-lg mb-3">
                                    Inovasi Teknologi dan Kreativitas
                                    <br />
                                    <p className="md:text-base text-sm text-justify">
                                        Saya bertekad untuk terus mendorong
                                        batas-batas inovasi dalam teknologi dan
                                        seni. Melalui kombinasi yang unik antara
                                        keterampilan teknis dan imajinasi
                                        artistik, saya akan menciptakan solusi
                                        yang menarik, fungsional, dan memukau.
                                    </p>
                                </li>
                                <li className="md:text-xl text-lg mb-3">
                                    Kualitas Tak Tertandingi
                                    <br />
                                    <p className="md:text-base text-sm text-justify">
                                        Saya berkomitmen untuk memberikan hasil
                                        kerja dengan kualitas tak tertandingi.
                                        Setiap proyek, baik besar maupun kecil,
                                        akan melalui proses ketat pengawasan
                                        kualitas untuk memastikan bahwa setiap
                                        detail terpenuhi dengan sempurna.
                                    </p>
                                </li>
                                <li className="md:text-xl text-lg mb-3">
                                    Kolaborasi dan Keterlibatan Klien
                                    <br />
                                    <p className="md:text-base text-sm text-justify">
                                        Saya percaya bahwa kolaborasi yang erat
                                        dengan klien adalah kunci kesuksesan.
                                        Saya akan selalu mendengarkan dengan
                                        seksama kebutuhan dan visi klien,
                                        mengintegrasikan umpan balik mereka
                                        dalam setiap tahap proyek, dan menjaga
                                        mereka tetap terlibat sepanjang
                                        perjalanan kreatif.
                                    </p>
                                </li>
                                <li className="md:text-xl text-lg mb-3">
                                    Kemajuan Berkelanjutan
                                    <br />
                                    <p className="md:text-base text-sm text-justify">
                                        Dunia teknologi dan desain terus
                                        berkembang. Saya berkomitmen untuk tetap
                                        terdepan dalam tren terbaru, alat, dan
                                        metodologi. Saya akan terus belajar,
                                        beradaptasi, dan mengambil
                                        langkah-langkah maju untuk menjaga
                                        layanan saya tetap relevan dan inovatif.
                                    </p>
                                </li>
                                <li className="md:text-xl text-lg mb-3">
                                    Keberlanjutan Lingkungan
                                    <br />
                                    <p className="md:text-base text-sm text-justify">
                                        Dalam setiap proyek yang saya kerjakan,
                                        saya akan mempertimbangkan dampak
                                        lingkungan. Saya berkomitmen untuk
                                        menggunakan praktik desain berkelanjutan
                                        dan memilih opsi yang ramah lingkungan
                                        kapan pun memungkinkan.
                                    </p>
                                </li>
                                <li className="md:text-xl text-lg mb-3">
                                    Pemberdayaan Tim Kreatif
                                    <br />
                                    <p className="md:text-base text-sm text-justify">
                                        Tim saya adalah aset berharga. Saya akan
                                        memberikan lingkungan kerja yang
                                        mendukung kreativitas, inovasi, dan
                                        pertumbuhan profesional. Saya juga akan
                                        memastikan keseimbangan kerja yang sehat
                                        untuk mendukung kualitas hidup tim saya.
                                    </p>
                                </li>
                                <li className="md:text-xl text-lg mb-3">
                                    Pengalaman Pengguna Terbaik
                                    <br />
                                    <p className="md:text-base text-sm text-justify">
                                        Saya akan selalu memprioritaskan
                                        pengalaman pengguna yang luar biasa
                                        dalam setiap aplikasi yang saya
                                        kembangkan. Dengan desain yang intuitif
                                        dan fungsionalitas yang canggih, saya
                                        bertujuan untuk menghasilkan produk yang
                                        tidak hanya indah, tetapi juga mudah
                                        digunakan.
                                    </p>
                                </li>
                                <li className="md:text-xl text-lg mb-3">
                                    Inspire dan Mendidik
                                    <br />
                                    <p className="md:text-base text-sm text-justify">
                                        Saya ingin menjadi sumber inspirasi dan
                                        pengetahuan dalam dunia teknologi dan
                                        seni. Melalui blog, tutorial, dan konten
                                        edukatif lainnya, saya berusaha untuk
                                        berbagi pengetahuan saya dengan
                                        komunitas lebih luas.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                    >
                        <ArrowLeftIcon className="h-6" />
                        &nbsp; Kembali
                    </Link>
                </div>
            </div>
        </>
    );
};
Layanan.layout = (page) => <Main children={page} />;
export default Layanan;
