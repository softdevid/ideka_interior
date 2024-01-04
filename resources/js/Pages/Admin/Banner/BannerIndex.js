import Main from "@/Layouts/Admin/Main";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Head, Link, router } from "@inertiajs/react";

const BannerIndex = ({ title, banner, uploadPresetName, cloudName }) => {
    console.log(banner)

    function hapus(id) {
        if (confirm('Yakin mau hapus banner?')) {
            router.delete(`/admin/banner/${id}`)
        }
    }
    return (
        <>
            <Head title={title} />
            <div className="flex justify-between my-3">
                <h1 className="text-xl">{title}</h1>
                <div><Link href="/admin/banner/create" className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg p-2">Tambah</Link></div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className="px-3">No</th>
                        <th className="px-6">Gambar</th>
                        <th className="px-6">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {banner.map((data, i) => (
                        <tr>
                            <td className="px-3">{i + 1}</td>
                            <td className="px-6">
                                <img src={data.imgUrl} className="w-40 h-auto" />
                            </td>
                            <td className="px-6">
                                {/* <Link href={`/admin/banner/${data.id}/edit`}><PencilSquareIcon onClick={() => hapus(data.id)} className="cursor-pointer mx-auto rounded-md text-black bg-yellow-400 hover:bg-yellow-500 w-7 h-7" /></Link> */}
                                <XMarkIcon onClick={() => hapus(data.id)} className="cursor-pointer mx-auto rounded-md text-white bg-red-600 hover:bg-red-700 w-7 h-7" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

BannerIndex.layout = (page) => <Main children={page} />
export default BannerIndex;
