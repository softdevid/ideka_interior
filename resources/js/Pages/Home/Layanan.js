import Main from "@/Layouts/Home/Main";
import { Head } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Aos from "aos";

const Layanan = ({ title }) => {
    useEffect(() => {
        Aos.refresh();
    }, []);

    const tabsData = [
        {
            label: "Semua",
            title: "Semua Layanan Kami",
            // content:
            //     "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
        },
        {
            label: "Desain Interior",
            title: "Desain Interior",
            // content:
            //     "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
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
                                                ? "border-[#7f7d7a]"
                                                : "border-transparent hover:border-[#a9a6a2]"
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 mb-4">
                        {cardsData.map((cards, card) => {
                            return (
                                <div className="flex items-center justify-center">
                                    <div
                                        key={card}
                                        className="max-w-xs bg-white rounded-lg shadow-lg mb-4"
                                        data-aos="zoom-in"
                                        data-aos-duration="1000"
                                        data-aos-delay=""
                                    >
                                        <img src={cards.img} />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                                {cards.title}
                                            </h5>

                                            <p className="mb-3 font-normal text-slate-800">
                                                {cards.highlight}
                                            </p>
                                            <a
                                                href="#"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7f7d7a] rounded-lg hover:bg-[#a9a6a2] focus:ring-4 focus:outline-none focus:ring-[#e5e3e0]"
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
            </div>
        </>
    );
};
Layanan.layout = (page) => <Main children={page} />;
export default Layanan;
