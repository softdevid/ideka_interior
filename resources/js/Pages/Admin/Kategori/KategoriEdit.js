import Main from "@/Layouts/Admin/Main";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";

const KategoriEdit = (props) => {

    const [values, setValues] = useState({
        namaKategori: props.kategori.namaKategori,
    })

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setValues(() => ({
            ...values,
            [name]: value,
        }));
    }

    function edit() {
        Inertia.patch(`/admin/kategori/${props.kategori.id}`, values)
    }
    return (
        <>
            <div className="flex justify-between my-3">
                <h1 className="text-xl">{props.title}</h1>
                <div>
                    <Link
                        href="/admin/kategori"
                        className="text-white bg-gray-500 hover:bg-gray-600 rounded-lg p-2"
                    >
                        Kembali
                    </Link>
                </div>
            </div>
                <div>
                    <label>Nama Kategori</label>
                    <input type="text"
                    value={values.namaKategori}
                        onChange={handleChange}
                        name="namaKategori"
                        className="p-2 rounded-md block"
                    />
                    <span className="text-red-600">{props.errors.namaKategori && props.errors.namaKategori}</span>
                </div>
                <button onClick={edit} className="p-2 mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Simpan</button>
        </>
    )
}

KategoriEdit.layout = (page) => <Main children={page} />
export default KategoriEdit;
