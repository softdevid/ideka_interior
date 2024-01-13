import Main from "@/Layouts/Home/Main";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";

const Detail = ({ title }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);
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
                            className="w-full lg:w-7/12 flex flex-col text-justify justify-center"
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
                                <div className="block max-w-sm p-6 bg-white rounded-lg shadow">
                                    <ul className="list-none">
                                        <li>Lokasi :</li>
                                        <li>Klien :</li>
                                        <li>Ukuran :</li>
                                        <li>Tahun :</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className=" justify-start mb-4 pt-12"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                            Cerita Singkat Saya
                        </h1>

                        <p className="font-normal text-justify text-base leading-6 text-gray-600 ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Cupiditate sequi vel a explicabo numquam
                            adipisci. Quibusdam earum similique error dolore
                            voluptates voluptas maxime adipisci porro, illum
                            aliquam nostrum iste voluptatibus non, at sapiente
                            minus rerum commodi quisquam accusantium. Doloremque
                            exercitationem tenetur id aspernatur! Ipsa minus
                            porro culpa, sit incidunt placeat impedit inventore
                            perferendis reiciendis optio dolore temporibus nihil
                            aperiam accusantium animi aspernatur illo neque
                            sequi dicta numquam reprehenderit non. Recusandae
                            adipisci facilis illo animi odit unde
                            exercitationem! Maiores at aperiam accusamus fugiat
                            incidunt, non, amet eveniet eligendi et voluptates
                            ratione iste doloribus facilis repellat? Fugiat
                            provident reprehenderit labore, sequi, optio nobis
                            ab cumque recusandae, modi maiores voluptatibus.
                            Voluptas animi iusto maxime ratione dicta libero
                            impedit? Voluptatum repellendus reiciendis magni ut,
                            aliquid ducimus. Blanditiis sunt labore recusandae
                            commodi aliquam! Quisquam doloremque incidunt a
                            facilis qui laborum placeat, numquam ullam
                            necessitatibus autem consectetur, neque laudantium
                            minus in aut totam, quam omnis perferendis!
                        </p>
                        <br />
                        <p className="font-normal text-justify text-base leading-6 text-gray-600 ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi repellat delectus, sunt eos temporibus
                            voluptate corrupti dignissimos quisquam doloribus
                            ipsum at doloremque unde vitae amet harum
                            aspernatur, itaque voluptatum necessitatibus sit
                            ducimus aliquam saepe. Similique quibusdam at
                            deleniti doloribus corporis atque beatae est
                            veritatis optio delectus. Culpa, unde quidem,
                            deserunt, expedita dolores rem facilis nihil
                            perspiciatis repellendus ad quaerat at natus
                            incidunt qui. Porro maxime repellendus fugiat quia
                            corrupti beatae maiores dolorem itaque, placeat
                            alias eius dicta sit possimus nostrum adipisci?
                            Veniam minima dolor, fugit eligendi accusantium
                            quidem dolores mollitia, doloremque nisi, itaque
                            maiores ab! Rem fugiat quo nihil ab corrupti
                            adipisci odio dignissimos, voluptatem beatae atque
                            incidunt. Ut non, illo fugiat eligendi officia error
                            temporibus eveniet omnis, quaerat maxime voluptates
                            dolor porro neque suscipit veniam vel aliquam
                            recusandae distinctio voluptate earum. Eveniet
                            incidunt distinctio, soluta quisquam laboriosam
                            explicabo maiores.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
Detail.layout = (page) => <Main children={page} />;
export default Detail;
