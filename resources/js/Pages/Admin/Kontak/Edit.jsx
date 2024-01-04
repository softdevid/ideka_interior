import Main from "@/Layouts/Admin/Main";
import axios from "axios";
import { useState } from "react";

const Edit = ({ kontak }) => {
    const [values, setValues] = useState({
        email: kontak.email,
        noHp: kontak.noHp,
        alamat: kontak.alamat,
        maps: kontak.maps
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function submit() {
        axios.patch(`/admin/kontak/${kontak.id}`, values)
            .then((res) => console.log(res))
    }

    return (
        <>
            <div className="my-2">
                <label>Email</label>
                <input name="email" onChange={handleChange} value={values.email} className="block w-[70%]" />
            </div>
            <div className="my-2">
                <label>No Hp/Wa</label>
                <input name="noHp" onChange={handleChange} value={values.noHp} className="block w-[70%]" />
            </div>
            <div className="my-2">
                <label>Embed Google Maps</label>
                <input name="maps" onChange={handleChange} value={values.maps} className="block w-[70%]" />
            </div>
            <div className="my-2">
                <label>Alamat</label>
                <textarea name="alamat" onChange={handleChange} value={values.alamat} className="block w-[70%]" />
            </div>
            <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white" onClick={submit}>Simpan</button>
        </>
    )
}

Edit.layout = (page) => <Main children={page} />
export default Edit;
