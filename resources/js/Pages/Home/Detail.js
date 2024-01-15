import Main from "@/Layouts/Home/Main";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Pagination from "@/Components/Home/Pagination";

const Detail = ({ title }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);
    const [currentPage, setCurrentPage] = useState(1);
    // Define your content for each page
    const pagesContent = [
        {
            title: "Contoh Layanan Page 1",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            imageSrc:
                "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        },
        {
            title: "Contoh Layanan Page 2",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            imageSrc:
                "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        },
        // Add more pages as needed
    ];

    const currentPageContent = pagesContent[currentPage - 1];

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <Head title={title} />
            <div className="container mx-auto lg:my-0 my-4">
                <div className="mx-auto lg:py-12 lg:px-6 py-4 px-4">
                    <h1 className="text-center text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                        Detail Layanan
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        <div
                            className="w-full lg:w-5/12 flex flex-col text-justify justify-center"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay=""
                        >
                            <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
                                Nama Layanan
                            </h1>
                            <p className="font-normal text-base leading-6 text-gray-600 ">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Reiciendis quis voluptates
                                explicabo saepe minima sit eaque, molestiae
                                incidunt magnam iste tenetur est totam qui magni
                                laborum amet inventore unde fugit ratione
                                impedit corporis modi non nemo? Laboriosam
                                debitis dicta eveniet amet iste! Minus dolor
                                repudiandae, ipsam impedit modi explicabo
                                repellat a officiis obcaecati maiores vel
                                doloribus sapiente commodi sunt velit qui alias
                                atque adipisci ab quidem doloremque dolorem
                                delectus minima at. Labore dolores illum minima
                                laboriosam maiores veniam totam, quidem,
                                inventore quas laudantium fugiat! Autem ea
                                tempora nostrum facere eligendi cum vel, nobis
                                libero unde ullam fugit rerum sed eos eveniet
                                possimus aliquam consectetur. Officia aperiam
                                consequuntur molestiae, maxime laboriosam
                                voluptates enim sint, natus autem iste, dolorem
                                quae magni sapiente!
                            </p>
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
                                    className="relative z-10 mx-auto md:max-w-xl max-w-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className=" justify-start mb-4 pt-12"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className=" justify-start mb-4 pt-12">
                            <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
                                {currentPageContent.title}
                            </h1>

                            <p className="font-normal text-justify text-base leading-6 text-gray-600 ">
                                {currentPageContent.content}
                            </p>
                            <br />
                            <img
                                src={currentPageContent.imageSrc}
                                alt="Content Image"
                                className="mx-auto md:max-w-xl max-w-full"
                            />
                        </div>

                        {/* Add Pagination component */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={pagesContent.length}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
Detail.layout = (page) => <Main children={page} />;
export default Detail;
