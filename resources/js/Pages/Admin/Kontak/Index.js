import Main from "@/Layouts/Admin/Main";
import { Head, Link } from "@inertiajs/react";

const Index = ({ title, kontak }) => {
    console.log("kontak", kontak)
    return (
        <>
            <Head title={title} />
            <div className="flex justify-between">
                <h1 className="text-xl">{title}</h1>
                <div><Link href={`/admin/kontak/${kontak.id}/edit`} className="text-black bg-yellow-300 hover:bg-yellow-400 rounded-lg p-2">Edit</Link></div>
            </div>

            <div className="w-[70%] items-center justify-center block mx-auto">
                <div className="m-2">
                    <div className="text-xl my-1">Email: {kontak.email}</div>
                    <div className="text-xl my-1">No Handphone: {kontak.noHp}</div>
                    <div className="text-xl my-1">Alamat: {kontak.alamat}</div>
                </div>
            </div>
        </>
    )
}

Index.layout = (page) => <Main children={page} />
export default Index;
