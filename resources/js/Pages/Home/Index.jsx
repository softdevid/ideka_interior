import Main from "@/Layouts/Home/Main";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Index = ({ title }) => {
    const slides = [
        {
            url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        },
        {
            url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        },
        {
            url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
        },
    ];

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
            <Head title={title} />
            <div className="relative group h-56 overflow-hidden md:h-[550px] mx-4 my-4 md:mx-auto md:my-auto">
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex].url})`,
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
            <div className="container mx-auto my-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mx-4 sm:mx-10 mb-4">
                    {/* <div
                        className="flex justify-center items-center"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    >
                        {props.icon.map((icons, index) => (
                            <img
                                key={index}
                                className="w-auto sm:h-40 h-28"
                                src={icons.link}
                                alt={icons.nama}
                            />
                        ))}
                    </div> */}
                    <div
                        className="text-gray-900 dark:text-white"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        <h1 className="text-center text-3xl md:text-4xl mb-3 font-bold">
                            Testing
                        </h1>
                        <p className="mb-3 text-sm md:text-lg font-medium text-gray-900 dark:text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim consectetur eum, ipsum pariatur, labore,
                            consequuntur cupiditate illum tempore sed quasi qui
                            commodi iste illo aliquam tenetur autem ullam! Vel,
                            reiciendis.
                        </p>
                        <Link
                            href="/profil"
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Lebih lanjut...
                        </Link>
                    </div>
                </div>
                <div className="border border-solid border-gray-400 my-4 mx-4"></div>
                <div
                    className="flex items-center justify-center"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    <h1 className="mb-3 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white">
                        Testing
                    </h1>
                </div>
                {/* <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mx-7 md:mx-10 mb-3"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="500"
                >
                    {props.dataWisata.slice(0, 6).map((wisata, index) => (
                        <div
                            key={index}
                            className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition hover:dark:bg-slate-700 duration-300 hover:scale-105 hover:bg-sky-100"
                        >
                            <div className="mb-2 flex justify-center items-center font-bold tracking-tight text-gray-900 dark:text-white">
                                <img src={wisata.img} alt={wisata.title} />
                            </div>
                            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {wisata.title}
                            </h5>

                            <p className="mb-3 text-center font-bold text-gray-700 dark:text-gray-400">
                                {wisata.deskripsi}
                            </p>
                        </div>
                    ))}
                </div>
                <div
                    className="flex items-center justify-center"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    <Link
                        href="/wisata/wisata-alam"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Lebih lanjut...
                    </Link>
                </div> */}
                <div className="border border-solid border-gray-400 my-4 mx-4"></div>
                <div
                    className="flex items-center justify-center"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    <h1 className="mb-3 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white">
                        KERJA SAMA
                    </h1>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 mb-4"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    {/* <div className="flex justify-center items-center">
                        <img
                            className="w-auto h-32 sm:h-40"
                            src="https://res.cloudinary.com/dnmkw2715/image/upload/v1687844459/wisata_banyumas/icons/Universitas_Amikom_Purwokerto_pwpgiq.png"
                            alt="Universitas Amikom Purwokerto"
                        />
                    </div> */}
                </div>
            </div>
        </>
    );
};
Index.layout = (page) => <Main children={page} />;
export default Index;
