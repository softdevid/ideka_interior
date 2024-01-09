import Main from "@/Layouts/Home/Main";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

const Layanan = ({ title }) => {
    // const { url } = usePage();
    // useEffect(() => {
    //     AOS.refresh();
    // }, []);

    const tabsData = [
        {
            label: "Desain Interior",
            title: "Layanan Desain Interior Kami",
            // content:
            //     "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
        },
        {
            label: "Gaya Interior",
            title: "Gaya Interior",
            // content:
            //     "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
        },
        {
            label: "Visualisasi 3D",
            title: "Visualisasi 3D",
            // content:
            //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse alias culpa earum voluptatum, quia ea.",
        },
    ];

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <>
            <Head title={title} />
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
                                            idx === activeTabIndex
                                                ? "border-blue-500"
                                                : "border-transparent hover:border-gray-200"
                                        }`}
                                        // Change the active tab on click.
                                        onClick={() => setActiveTabIndex(idx)}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                        {/* Show active tab content. */}
                        <div className="py-4">
                            <p className="text-4xl mb-3 font-bold text-center">
                                {tabsData[activeTabIndex].title}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                        <div
                            className="w-full lg:w-5/12 text-justify justify-center"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay=""
                        >
                            <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
                                Judul Desain Interior
                            </h1>
                            <p className="font-normal text-base leading-6 text-gray-600 ">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Reiciendis quis voluptates
                                explicabo saepe minima sit eaque, molestiae
                                incidunt magnam iste tenetur est totam qui magni
                                laborum amet inventore unde fugit ratione
                                impedit corporis modi non nemo?
                            </p>
                            <Link
                                href="#"
                                className="mt-4 inline-flex items-center right-0 justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                            >
                                Nama Desain Interior &nbsp;
                                <ArrowRightIcon className="h-6" />
                            </Link>
                        </div>
                        <div className=" w-full self-end px-4 lg:w-1/2">
                            <div
                                className="relative mt-4 lg:right-0 lg:mt-9"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay=""
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
                                    alt="Interior House"
                                    className="relative z-10 mx-auto md:max-w-md max-w-full"
                                />
                            </div>
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
