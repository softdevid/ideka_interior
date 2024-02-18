import Main from "@/Layouts/Home/Main";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Aos from "aos";

const HasilKerja = ({ title, portfolio, kategori }) => {
    useEffect(() => {
        Aos.refresh();
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(0);
    console.log(selectedCategory)
    // const [isHovered, setIsHovered] = useState(null);

    // const handleMouseEnter = (index) => {
    //     setIsHovered(index);
    // };

    // const handleMouseLeave = () => {
    //     setIsHovered(null);
    // };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // const renderImages = (category) => {
    //     const categoryData = data.find((item) => item.value === category);
    //     return categoryData ? categoryData.images : [];
    // };
    // console.log(portfolio)

    const tabsData = [
        {
            label: "Semua",
            title: "Semua Layanan Kami",
            idKategori: 0,
        },
        ...kategori.map((data) => {
          return {
                label: data.namaKategori,
                title: data.namaKategori,
                idKategori: data.id
            }
        })

    ];

    // const [kategori, setKategori] = useState(0);
    // console.log(portfolio)
    const filteredPortfolio = portfolio.filter(
      (portfolio) =>
        portfolio.kategori.id === selectedCategory
    );
    console.log(filteredPortfolio)

    return (
        <>
            <Head title={title} />
            <div className="container mx-auto my-4">
                <div className="container  md:mx-auto md:py-4 py-2 px-4 mb-4">
                    <p className="md:text-3xl text-xl mb-3 font-bold">
                        Hasil Kerja
                    </p>
                    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                        {tabsData.map((category) => (
                            <button
                                key={category.idKategori}
                                type="button"
                                className={`border border-white hover:border-[hsl(40,8%,92%)] focus:ring-4 focus:outline-none focus:ring-[#e5e3e0] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
                                    selectedCategory === category.idKategori
                                        ? "active text-white bg-[#7f7d7a]"
                                        : "hover:text-white hover:bg-[#a9a6a2]"
                                }`}
                                onClick={() =>
                                    handleCategoryChange(category.idKategori)
                                }
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedCategory === 0 ?
                            portfolio.map((image, index) => (
                                <Link
                                    key={index}
                                    href={`/hasil-kerja/${image.judul}`}
                                    className="image-link"
                                >
                                    <div className="image-container">
                                        <img
                                            className="h-auto max-w-full rounded-lg"
                                            src={image.imgUrl1}
                                            alt=""
                                        />
                                        <div className="overlay">
                                            <p className="company-name">
                                                {image.judul}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        ): (
                            filteredPortfolio.map((image, index) => (
                                <Link
                                    key={index}
                                    href={`/hasil-kerja/${image.judul}`}
                                    className="image-link"
                                >
                                    <div className="image-container">
                                        <img
                                            className="h-auto max-w-full rounded-lg"
                                            src={image.imgUrl1}
                                            alt=""
                                        />
                                        <div className="overlay">
                                            <p className="company-name">
                                                {image.judul}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
HasilKerja.layout = (page) => <Main children={page} />;
export default HasilKerja;
