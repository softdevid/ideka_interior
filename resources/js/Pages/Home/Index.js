import Main from "@/Layouts/Home/Main";
import { ArrowRightIcon, EnvelopeIcon, MapPinIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight, BsTelephone } from "react-icons/bs";
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

    const cardsData = [
        {
            img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
            title: "Testing",
            highlight:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla est ad sit natus ab, quos quo numquam eveniet vel inventore facilis a nemo iste!",
            nameButton: "Lorem Ipsum",
        },
        {
            img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
            title: "Testing",
            highlight:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla est ad sit natus ab, quos quo numquam eveniet vel inventore facilis a nemo iste!",
            nameButton: "Lorem Ipsum",
        },
        {
            img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
            title: "Testing",
            highlight:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla est ad sit natus ab, quos quo numquam eveniet vel inventore facilis a nemo iste!",
            nameButton: "Lorem Ipsum",
        },
        {
            img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
            title: "Testing",
            highlight:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla est ad sit natus ab, quos quo numquam eveniet vel inventore facilis a nemo iste!",
            nameButton: "Lorem Ipsum",
        },
        {
            img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
            title: "Testing",
            highlight:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla est ad sit natus ab, quos quo numquam eveniet vel inventore facilis a nemo iste!",
            nameButton: "Lorem Ipsum",
        },
        {
            img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
            title: "Testing",
            highlight:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla est ad sit natus ab, quos quo numquam eveniet vel inventore facilis a nemo iste!",
            nameButton: "Lorem Ipsum",
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

            <div className="mx-auto my-4">
                <div className="mt-4 mx-4 sm:mx-10 mb-4">
                    <div
                        className="text-gray-900 dark:text-white container"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        <h1 className="text-center text-3xl md:text-4xl mb-3 font-bold">
                            Spesialis
                        </h1>
                        <p className="mb-3 text-sm md:text-lg text-center font-medium text-gray-900 dark:text-white">
                            <b className="text-lg">"</b>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim consectetur eum, ipsum pariatur, labore,
                            consequuntur cupiditate illum tempore sed quasi qui
                            reiciendis.
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim consectetur eum, ipsum pariatur, labore,
                            consequuntur cupiditate illum tempore sed quasi qui
                            reiciendis.
                            <b className="text-lg">"</b>

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
            </div>
            {/* <div className="border border-solid border-gray-400 my-4 mx-4"></div> */}
            <h1 className="text-center text-3xl md:text-4xl mb-3 font-bold" data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200">
                Layanan
            </h1>
            <div
                className="flex items-center justify-center container mx-auto"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                {/* <h1 className="mb-3 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white"> */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
                    {cardsData.map((cards, card) => {
                        return (
                            <div className="flex items-center justify-center">
                                <div
                                    key={card}
                                    className="max-w-xs bg-white rounded-lg shadow mb-4"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                    data-aos-delay=""
                                >
                                    <img src={cards.img} />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                            {cards.title}
                                        </h5>

                                        <p className="mb-3 font-normal text-gray-700">
                                            {cards.highlight}
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                        >
                                            {cards.nameButton}
                                            &nbsp;
                                            <ArrowRightIcon className="w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Link href="#" as="button" className="p-3 font-bold items-center justify-center block bg-blue-500 border-white border-2 hover:shadow-lg hover:shadow-black text-white hover:bg-blue-600 mx-auto mb-3">SELENGKAPNYA</Link>

            <div className="bg-[#283618] w-full h-auto">
                <div className="p-2">
                    <div
                        className="flex items-center justify-center mt-3"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    >
                        <h1 className="mb-3 text-center text-3xl font-bold tracking-tight leading-none text-white md:text-4xl dark:text-white">
                            Portfolio
                        </h1>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 container mx-auto mb-4"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <Link href="#" className="group relative transform overflow-hidden border-white border-2 rounded-lg">
                            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" fetchpriority="high" className="w-auto h-32 sm:h-40 overflow-hidden hover:opacity-60 hover:bg-bl rounded-lg" />
                            <h2 className="text-center absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4 text-white">Nama Portfolio</h2>
                        </Link>
                        <Link href="#" className="group relative transform overflow-hidden border-white border-2 rounded-lg">
                            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" fetchpriority="high" className="w-auto h-32 sm:h-40 overflow-hidden hover:opacity-60 hover:bg-bl rounded-lg" />
                            <h2 className="text-center absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4 text-white">Nama Portfolio</h2>
                        </Link>
                        <Link href="#" className="group relative transform overflow-hidden border-white border-2 rounded-lg">
                            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" fetchpriority="high" className="w-auto h-32 sm:h-40 overflow-hidden hover:opacity-60 hover:bg-bl rounded-lg" />
                            <h2 className="text-center absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4 text-white">Nama Portfolio</h2>
                        </Link>
                        <Link href="#" className="group relative transform overflow-hidden border-white border-2 rounded-lg">
                            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" fetchpriority="high" className="w-auto h-32 sm:h-40 overflow-hidden hover:opacity-60 hover:bg-bl rounded-lg" />
                            <h2 className="text-center absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4 text-white">Nama Portfolio</h2>
                        </Link>
                        <Link href="#" className="group relative transform overflow-hidden border-white border-2 rounded-lg">
                            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" fetchpriority="high" className="w-auto h-32 sm:h-40 overflow-hidden hover:opacity-60 hover:bg-bl rounded-lg" />
                            <h2 className="text-center absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4 text-white">Nama Portfolio</h2>
                        </Link>
                        <Link href="#" className="group relative transform overflow-hidden border-white border-2 rounded-lg">
                            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" fetchpriority="high" className="w-auto h-32 sm:h-40 overflow-hidden hover:opacity-60 hover:bg-bl rounded-lg" />
                            <h2 className="text-center absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4 text-white">Nama Portfolio</h2>
                        </Link>
                    </div>
                    <Link href="#" as="button" className="p-3 font-bold items-center justify-center block bg-blue-500 border-white border-2 hover:shadow-lg hover:shadow-black text-white hover:bg-blue-600 mx-auto mb-3">SELENGKAPNYA</Link>
                </div>
            </div>

            <h1 className="text-3xl font-bold mt-3 text-center">Kontak</h1>
            <div className="sm:block md:flex p-2 mx-3 container">
                <div className="w-[50%] h-96 border"></div>
                <div className="w-[50%] block">
                    <div className="p-2 font-semibold text-xl inline-flex">
                        <div className="h-14 w-14 text-white bg-blue-500 rounded-full flex items-center justify-center">
                            <EnvelopeIcon className="w-7 h-7" />
                        </div>
                        <b className="mt-3 ml-2">softdev@gmail.com</b>
                    </div>
                    <div className="block">
                        <div className="p-2 font-semibold text-xl inline-flex">
                            <div className="h-14 w-14 text-white bg-blue-500 rounded-full flex items-center justify-center">
                                <BsTelephone className="w-7 h-7" />
                            </div>
                            <b className="mt-3 ml-2">0877365735353</b>
                        </div>
                    </div>
                    <div className="block">
                        <div className="p-2 font-semibold text-xl inline-flex">
                            <div className="h-14 w-14 text-white bg-blue-500 rounded-full flex items-center justify-center">
                                <MapPinIcon className="w-7 h-7" />
                            </div>
                            <b className="mt-3 ml-2">SELABAYA, KALIMANAH, PURBALINGGA</b>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
Index.layout = (page) => <Main children={page} />;
export default Index;
