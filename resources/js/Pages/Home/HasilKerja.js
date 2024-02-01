import Main from "@/Layouts/Home/Main";
import { Head } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Aos from "aos";

const HasilKerja = ({ title }) => {
    useEffect(() => {
        Aos.refresh();
    }, []);

    const [selectedCategory, setSelectedCategory] = useState("semua");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const renderImages = (category) => {
        const categoryData = data.find((item) => item.value === category);
        return categoryData ? categoryData.images : [];
    };

    const data = [
        {
            label: "Semua",
            value: "semua",
            images: [
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                },
                {
                    imageLink:
                        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
                },
                {
                    imageLink:
                        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
                },
            ],
        },
        {
            label: "Rumah",
            value: "rumah",
            images: [
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                },
            ],
        },
        {
            label: "Rumah Sakit",
            value: "rumah_sakit",
            images: [
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                },
                {
                    imageLink:
                        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
                },
                {
                    imageLink:
                        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
                },
            ],
        },
        {
            label: "Tempat Umum",
            value: "tempat_umum",
            images: [
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                },
            ],
        },
        {
            label: "Restaurant",
            value: "restaurant",
            images: [
                {
                    imageLink:
                        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
                },
                {
                    imageLink:
                        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                },
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                },
            ],
        },
    ];

    return (
        <>
            <Head title={title} />
            <div className="container mx-auto my-4">
                <div className="container  md:mx-auto md:py-4 py-2 px-4 mb-4">
                    <p className="md:text-3xl text-xl mb-3 font-bold">
                        Hasil Kerja
                    </p>
                    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                        {data.map((category) => (
                            <button
                                key={category.value}
                                type="button"
                                className={`border border-white hover:border-[#edecea] focus:ring-4 focus:outline-none focus:ring-[#e5e3e0] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
                                    selectedCategory === category.value
                                        ? "active text-white bg-[#7f7d7a]"
                                        : "hover:text-white hover:bg-[#a9a6a2]"
                                }`}
                                onClick={() =>
                                    handleCategoryChange(category.value)
                                }
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {renderImages(selectedCategory).map((image, index) => (
                            <div key={index}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src={image.imageLink}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
HasilKerja.layout = (page) => <Main children={page} />;
export default HasilKerja;
