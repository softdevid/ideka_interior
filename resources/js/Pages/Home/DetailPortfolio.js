import Main from "@/Layouts/Home/Main";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Pagination from "@/Components/Home/Pagination";
import ReactPaginate from "react-paginate";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { BsTelephone } from "react-icons/bs";
import FormatRupiah from "@/Components/FormatRupiah";

const DetailPortfolio = ({ title, portfolio, profil }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

//   const pagesContent = portfolio.map((data) => ({
//     imageSrc: data.imgUrl,
//   }));

  const pageSize = 3;
  const pageCount = Math.ceil(portfolio.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return portfolio.slice(startIndex, endIndex);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = [
    {
        img: portfolio.imgUrl1
    },
    {
        img: portfolio.imgUrl2
    },
    {
        img: portfolio.imgUrl3
    },
    {
        img: portfolio.imgUrl4
    },
    {
        img: portfolio.imgUrl5
    },
  ]

  return (
    <>
      <Head title={title} />
      <div className="container mx-auto lg:my-0 my-4">
        <div className="mx-auto lg:py-12 lg:px-6 py-4 px-4">
          <h1 className="text-center text-3xl lg:text-4xl font-bold leading-9 pb-4">
            Detail Portfolio {portfolio.judul}
          </h1>
            <p>{portfolio.deskripsi}</p>

          <div
            className="justify-start mb-4 pt-12"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {/* <div className="mx-auto md:max-w-xl max-w-full"> */}
            <div className="mx-auto md:max-w-3xl max-w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
              {currentPageItems.map((data, i) => (
                <div key={i} className="object-cover object-center">
                  {data.img ? (
                  <img
                    src={data.img}
                    alt={`Content Image ${i + 1}`}
                    className="w-full h-full"
                  />
                  ) : (
                    <></>
                  )
                  }
                </div>
              ))}
            </div>

        </div>
        </div>
      </div>
    </>
  );
};

DetailPortfolio.layout = (page) => <Main children={page} />;
export default DetailPortfolio;
