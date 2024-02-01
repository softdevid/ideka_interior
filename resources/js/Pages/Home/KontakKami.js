import Main from "@/Layouts/Home/Main";
import { Head } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import Aos from "aos";

const KontakKami = ({ title }) => {
    useEffect(() => {
        Aos.refresh();
    }, []);

    return (
        <>
            <Head title={title} />
            <div className="container mx-auto my-4">
                <section className="mb-4">
                    <div className="mx-4 md:mx-0 mb-4">
                        <div
                            className="p-4 bg-[#fbfafa] rounded-lg"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="flex justify-center">
                                <div className="text-center md:max-w-xl lg:max-w-3xl">
                                    <h2 className="mb-4 px-6 text-3xl font-bold text-black uppercase">
                                        Kontak Kami
                                    </h2>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-2xl mb-3 font-bold text-black text-start">
                                    Kontak Kami
                                </p>
                                <p className="text-lg mb-3 font-bold text-black">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Fugiat deleniti
                                    voluptatibus neque excepturi aliquam facere
                                    :
                                </p>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="p-6 max-w-sm hover:bg-[#f6f6f5] bg-[#edecea] rounded-lg border border-[#edecea] shadow-md  transform transition  duration-300 hover:scale-105">
                                            <span className="mb-2 flex justify-center items-center font-bold tracking-tight text-[#1b1c33] ">
                                                <img
                                                    className="h-32 w-32"
                                                    src="https://res.cloudinary.com/dnmkw2715/image/upload/v1692434080/zionexeonch/social/Desain_tanpa_judul_5_yxpcc8.png"
                                                    alt="Gmail"
                                                />
                                            </span>
                                            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-[#1b1c33] ">
                                                Email
                                            </h5>

                                            <div className="flex justify-center items-center">
                                                <a
                                                    href="#"
                                                    className="inline-flex text-white items-center py-2 px-3 text-sm font-medium text-center bg-[#7f7d7a] rounded-lg hover:bg-[#a9a6a2] focus:ring-4 focus:outline-none focus:ring-[#e5e3e0]"
                                                    target="_blank"
                                                >
                                                    Kirim Pesan
                                                    <svg
                                                        aria-hidden="true"
                                                        className="ml-2 -mr-1 w-4 h-4"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="p-6 max-w-sm bg-[#edecea] rounded-lg border border-[#edecea] shadow-md  transform transition  duration-300 hover:scale-105 hover:bg-[#f6f6f5]">
                                            <span className="flex justify-center items-center font-bold tracking-tight mb-3">
                                                <img
                                                    className="h-32 w-32"
                                                    src="https://res.cloudinary.com/dnmkw2715/image/upload/v1691655302/zionexeonch/social/Desain_tanpa_judul_2_qpzyjs.png"
                                                    alt="Whatsapp"
                                                />
                                            </span>
                                            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight">
                                                Telepon / Whatsapp
                                            </h5>

                                            <div className="flex justify-center items-center">
                                                <a
                                                    href="#"
                                                    className="inline-flex text-white items-center py-2 px-3 text-sm font-medium text-center bg-[#7f7d7a] rounded-lg hover:bg-[#a9a6a2] focus:ring-4 focus:outline-none focus:ring-[#e5e3e0]"
                                                    target="_blank"
                                                >
                                                    Chat
                                                    <svg
                                                        aria-hidden="true"
                                                        className="ml-2 -mr-1 w-4 h-4"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="p-6 max-w-sm hover:bg-[#f6f6f5] bg-[#edecea] rounded-lg border border-[#edecea] shadow-md  transform transition  duration-300 hover:scale-105 ">
                                            <span className="flex justify-center items-center font-bold tracking-tight mb-3">
                                                <img
                                                    className="h-32 w-32"
                                                    src="https://res.cloudinary.com/dnmkw2715/image/upload/v1692434080/zionexeonch/social/Desain_tanpa_judul_4_etlbjj.png"
                                                    alt="Telegram"
                                                />
                                            </span>
                                            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight">
                                                Telegram
                                            </h5>

                                            <div className="flex justify-center items-center">
                                                <a
                                                    href="#"
                                                    className="inline-flex text-white items-center py-2 px-3 text-sm font-medium text-center bg-[#7f7d7a] rounded-lg hover:bg-[#a9a6a2] focus:ring-4 focus:outline-none focus:ring-[#e5e3e0]"
                                                    target="_blank"
                                                >
                                                    Chat
                                                    <svg
                                                        aria-hidden="true"
                                                        className="ml-2 -mr-1 w-4 h-4"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
KontakKami.layout = (page) => <Main children={page} />;
export default KontakKami;
