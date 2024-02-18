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

const Detail = ({ title, layanan, profil }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

//   const pagesContent = layanan.gambar.map((data) => ({
//     imageSrc: data.imgUrl,
//   }));

  const pageSize = 3;
  const pageCount = Math.ceil(layanan.gambar.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return layanan.gambar.slice(startIndex, endIndex);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems =
    layanan.gambar.length > 0 ? getPageItems(currentPage) : [];

  function handlePageClick(data) {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }

  return (
    <>
      <Head title={title} />
      <div className="container mx-auto lg:my-0 my-4">
        <div className="mx-auto lg:py-12 lg:px-6 py-4 px-4">
          <h1 className="text-center text-3xl lg:text-4xl font-bold leading-9 pb-4">
            Detail Layanan
          </h1>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-8">
            <div
              className="w-full lg:w-5/12 flex flex-col text-justify justify-center"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay=""
            >
              <h1 className="text-2xl lg:text-3xl font-bold leading-9 pb-4">
                {layanan.namaLayanan}
              </h1>
              <p className="font-normal text-base text-slate-800">
                {layanan.deskripsi}
              </p>
              <p className="text-lg font-bold mt-4">Harga <FormatRupiah value={layanan.hrgTerrendah} /> - <FormatRupiah value={layanan.hrgTertinggi} /></p>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div
                className="relative mt-4 lg:right-0 lg:mt-9"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay=""
              >
                <video
                  controls
                  preload="auto"
                  playsInline
                  poster={layanan.gambar[0].imgUrl}
                >
                  <source src={layanan.videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

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
                  <img
                    src={data.imgUrl}
                    alt={`Content Image ${i + 1}`}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* <Pagination
              currentPage={currentPage}
              totalPages={pageCount}
              onPageChange={handlePageClick}
            /> */}

        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center mt-8"}
          pageClassName={
            "mx-2 bg-white rounded-full cursor-pointer hover:bg-[#7f7d7a] hover:text-white text-lg p-2"
          }
          breakClassName={
            "mx-2 bg-white rounded-full cursor-not-allowed text-lg p-2"
          }
          activeClassName={"text-red-500"}
          previousClassName={
            "mx-2 bg-white rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"
          }
          nextClassName={
            "mx-2 bg-white rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"
          }
          disabledClassName={
            "mx-2 bg-gray-300 text-gray-500 rounded-full cursor-not-allowed text-lg p-2"
          }
        />

        <p className="text-2xl text-center mt-4 font-bold">Tertarik? Pesan melalui:</p>
        <div className="md:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
              <div className="p-3 font-semibold text-xl text-center">
                <div className="h-14 w-14 bg-[#7f7d7a] rounded-full flex items-center justify-center mx-auto">
                  <EnvelopeIcon className="w-7 h-7 text-white" />
                </div>
                <b className="mt-3">{profil.email}</b>
              </div>

              <div className="p-3 font-semibold text-xl text-center">
                <div className="h-14 w-14 bg-[#7f7d7a] rounded-full flex items-center justify-center mx-auto">
                  <BsTelephone className="w-7 h-7 text-white" />
                </div>
                <b className="mt-3">{profil.noHp}</b>
              </div>

              <div className="p-3 font-semibold text-xl text-center">
                <div className="h-14 w-14 bg-[#7f7d7a] rounded-full flex items-center justify-center mx-auto">
                  <MapPinIcon className="w-7 h-7 text-white" />
                </div>
                <b className="mt-3">{profil.alamat}</b>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

Detail.layout = (page) => <Main children={page} />;
export default Detail;
