import Main from "@/Layouts/Home/Main";
import { Head } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Aos from "aos";

const HasilKerja = ({ title, portfolio }) => {
    useEffect(() => {
        Aos.refresh();
    }, []);

    const [selectedCategory, setSelectedCategory] = useState("semua");
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (index) => {
        setIsHovered(index);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const renderImages = (category) => {
        const categoryData = data.find((item) => item.value === category);
        return categoryData ? categoryData.images : [];
    };
    console.log(portfolio)

    const data = [
        {
            label: "Semua",
            value: "semua",
            images: [
                // {
                    // imageLink:
                    //     "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
                    // company: "PT.Setia Budi",
                    // project: "Tempat Umum",
                    // link: "/detail-gambar-4",
                // },
                ...portfolio.map((data) => {
                    return {
                        imageLink: data.imgUrl1,
                    company: data.judul,
                    project: data.kategori.namaKategori,
                    link: "/detail-gambar-2",
                      }
                  })
            ],
        },
        {
            label: "Rumah",
            value: "rumah",
            images: [
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                    company: "PT.Suka Maju",
                    project: "Rumah",
                    link: "/detail-gambar-2",
                },
            ],
        },
        {
            label: "Rumah Sakit",
            value: "rumah_sakit",
            images: [
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                    company: "PT.Harapan Ibu",
                    project: "Rumah Sakit",
                    link: "/detail-gambar-3",
                },
            ],
        },
        {
            label: "Tempat Umum",
            value: "tempat_umum",
            images: [
                {
                    imageLink:
                        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
                    company: "PT.Setia Budi",
                    project: "Tempat Umum",
                    link: "/detail-gambar-4",
                },
            ],
        },
        {
            label: "Restaurant",
            value: "restaurant",
            images: [
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                    company: "PT.Indokores",
                    project: "Restaurant",
                    link: "/detail-gambar-1",
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
                            <a
                                key={index}
                                href={image.link}
                                className="image-link"
                            >
                                <div className="image-container">
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src={image.imageLink}
                                        alt=""
                                    />
                                    <div className="overlay">
                                        <p className="company-name">
                                            {image.company}
                                        </p>
                                        <p className="project-name">
                                            {image.project}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
HasilKerja.layout = (page) => <Main children={page} />;
export default HasilKerja;
