import Main from "@/Layouts/Home/Main";
import {
    ArrowRightIcon,
    EnvelopeIcon,
    MapPinIcon,
} from "@heroicons/react/20/solid";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import {
    BsChevronCompactLeft,
    BsChevronCompactRight,
    BsTelephone,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Index = (props) => {
    console.log(props)
    const initiatedBanner = props.banner ? props.banner.map((data) => ({ url: data.imgUrl })) : [];
    const [slides, setSlides] = useState(initiatedBanner);
    // const slides = [
    //     {
    //         url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    //     },
    //     {
    //         url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    //     },
    //     {
    //         url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    //     },
    // ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <Head title={props.title} />
            <div className="relative group h-56 overflow-hidden md:h-[550px] mx-4 my-4 md:mx-auto lg:my-auto">
                <div
                    style={{
                        backgroundImage: `url(${slides.length > 0 ? slides[currentIndex].url : ''})`,
                    }}
                    className="w-full h-full bg-center bg-cover duration-500"
                ></div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className="flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className="text-2xl cursor-pointer"
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto my-4">
                <div className="mt-4 mx-4 sm:mx-10 mb-4">
                    <div
                        className="container"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        <h1 className="text-center text-3xl md:text-4xl mb-3 font-bold">
                            Spesialis
                        </h1>
                        <p className="mb-3 text-sm md:text-lg text-center font-medium">
                            <b className="text-lg">"</b>{props.profil.deskripsiPerusahaan}
                            <b className="text-lg">"</b>
                        </p>

                        <Link
                            href="/profil"
                            type="button"
                            className="text-white bg-[#7f7d7a] hover:bg-[#a9a6a2] focus:ring-4 focus:ring-[#e5e3e0] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                        >
                            Lebih lanjut...
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className="border border-solid border-gray-400 my-4 mx-4"></div> */}
            <h1
                className="text-center text-3xl md:text-4xl mb-3 font-bold"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
            >
                Layanan
            </h1>
            <div
                className="flex items-center justify-center container mx-auto"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                {/* <h1 className="mb-3 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white"> */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
    {props.layanan.data.map((cards, card) => {
        return (
            <div className="flex items-center justify-center" key={card}>
    <div
        className="max-w-xs bg-white rounded-lg shadow mb-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay=""
    >
        <div className="max-h-[18rem] min-h-[18rem] w-full min-w-full overflow-hidden">
            <img
                src={cards.gambar[0].imgUrl}  // Ganti URL gambar sesuai kebutuhan Anda
                className="object-cover object-center w-full h-full"
                alt="Card Image"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {cards.namaLayanan}
            </h5>

            <p className="mb-3 font-normal text-gray-700">
                Deskripsi card baru dengan gambar berbeda ukuran mengikuti ukuran card.
            </p>
            <Link
                href={`/layanan/${cards.slug}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7f7d7a] rounded-lg hover:bg-[#a9a6a2] focus:ring-4 focus:outline-none focus:ring-[#e5e3e0]"
            >
                Lanjut...
                &nbsp;
                {/* Ganti ikon panah sesuai kebutuhan Anda */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </Link>
        </div>
    </div>
</div>

        );
    })}
</div>


            </div>
            <Link
                href="/layanan"
                as="button"
                className="p-3 font-bold items-center justify-center block bg-[#7f7d7a] border-white border-2  text-white hover:bg-[#a9a6a2] mx-auto mb-3"
            >
                SELENGKAPNYA
            </Link>

            <div className="bg-[#2a2a29] w-full h-auto">
                <div className="p-2">
                    <div
                        className="flex items-center justify-center mt-3"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    >
                        <h1 className="mb-3 text-center text-3xl font-bold tracking-tight leading-none text-white md:text-4xl">
                            Portfolio
                        </h1>
                    </div>

                    <div
                        className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 container mx-auto mb-4"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        {props.portfolio.data.map((p, data) => {
                            return (
                            <Link key={p}
                                href="#"
                                className="group relative transform overflow-hidden border-white border-2 rounded-lg"
                            >
                                <img
                                    src={data.imgUrl1}
                                    fetchpriority="high"
                                    className="w-auto h-32 sm:h-40 overflow-hidden hover:opacity-60 hover:bg-bl rounded-lg"
                                />
                                <h2 className="text-center absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4 text-white">
                                    {data.judul}
                                </h2>
                            </Link>
                            )
                        })}
                    </div>
                    <Link
                        href="#"
                        as="button"
                        className="p-3 font-bold items-center justify-center block bg-[#7f7d7a] text-white hover:bg-[#a9a6a2] mx-auto mb-3"
                    >
                        SELENGKAPNYA
                    </Link>
                </div>
            </div>

            <h1 className="text-3xl font-bold mt-3 text-center">Kontak</h1>
            <div className="sm:block md:flex p-2 mx-3 container">
                <div className="w-[50%] h-96 border">
                    <div className="absolute object-cover object-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56400422765!2d107.56075478156819!3d-6.903442379289441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1706938506068!5m2!1sid!2sid" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="w-[50%] block">
                    <div className="p-2 font-semibold text-xl inline-flex">
                        <div className="h-14 w-14 text-white bg-[#7f7d7a] rounded-full flex items-center justify-center">
                            <EnvelopeIcon className="w-7 h-7" />
                        </div>
                        <b className="mt-3 ml-2">{props.profil.email}</b>
                    </div>
                    <div className="block">
                        <div className="p-2 font-semibold text-xl inline-flex">
                            <div className="h-14 w-14 text-white bg-[#7f7d7a] rounded-full flex items-center justify-center">
                                <BsTelephone className="w-7 h-7" />
                            </div>
                            <b className="mt-3 ml-2">{props.profil.noHp}</b>
                        </div>
                    </div>
                    <div className="block">
                        <div className="p-2 font-semibold text-xl inline-flex">
                            <div className="h-14 w-14 text-white bg-[#7f7d7a] rounded-full flex items-center justify-center">
                                <MapPinIcon className="w-7 h-7" />
                            </div>
                            <b className="mt-3 ml-2">
                                {props.profil.alamat}
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
Index.layout = (page) => <Main children={page} />;
export default Index;
