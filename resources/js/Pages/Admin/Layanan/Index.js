import Main from "@/Layouts/Admin/Main";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";

const Index = ({ title, layanan }) => {
    const hapus = (id) => {
        console.log(id);
        // axios.delete(`/admin/layanan/${id}`)
        // .then((res) => console.log(res.data.data))
        axios.delete(`/admin/layanan/${id}`);
    };

    return (
        <>
            <Head title={title} />
            <div className="flex justify-between">
                <h1 className="text-xl">{title}</h1>
                <div>
                    <Link
                        href="/admin/layanan/create"
                        className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg p-2"
                    >
                        Tambah
                    </Link>
                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-2 py-2">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Foto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nama Layanan
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Kisaran Harga
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {layanan.length > 0 ? (
                            layanan.map((data, i) => {
                                return (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {i + 1}
                                        </th>
                                        <td class="px-6 py-4">
                                            <img
                                                src={data.imgUrl}
                                                alt={data.namaLayanan}
                                                className="w-14 h-14"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            {data.namaLayanan}
                                        </td>
                                        <td class="px-6 py-4">
                                            {data.hrgTerrendah} -{" "}
                                            {data.hrgTertinggi}
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <a
                                                href="#"
                                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Edit
                                            </a>
                                            <button
                                                onClick={() => hapus(data.id)}
                                                class="font-medium text-red-600 dark:text-red-500 hover:underline ml-1"
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <td class="px-6 py-4 text-center" colSpan={5}>
                                Tidak ada data
                            </td>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

Index.layout = (page) => <Main children={page} />;
export default Index;
