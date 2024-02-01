import Main from "@/Layouts/Admin/Main";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

const Index = ({ profil, props }) => {
    const [errors, setErrors] = useState({});
    const [notif, setNotif] = useState(false)

    const [values, setValues] = useState({
        namaPerusahaan: profil.namaPerusahaan,
        deskripsiPerusahaan: profil.deskripsiPerusahaan,
        linkInstagram: profil.linkInstagram,
        linkTwitter: profil.linkTwitter,
        linkFacebook: profil.linkFacebook,
        email: profil.email,
        noHp: profil.noHp,
        alamat: profil.alamat,
        maps: profil.maps,
        logoImgName: profil.logoImgName,
        logoImgUrl: profil.logoImgUrl,
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function message() {
        return (
            <div className="bg-green-500 text-white p-2 flex"><CheckIcon className="text-white w-6 h-6" /> Berhasil mengubah</div>
        )
    }

    function submit() {
        Inertia.patch(`/admin/profil/${profil.id}`, values)
        setNotif(!notif)
        setTimeout(() => {
            setNotif(false)
        }, 3000);
    }
    return (
        <>
            {notif && (
                message()
            )}

            <div className="grid md:grid-cols-2 gap-4">
                <div className="my-2">
                    <label>Nama Perusahaan</label>
                    <input
                        name="namaPerusahaan"
                        type="text"
                        onChange={handleChange}
                        value={values.namaPerusahaan}
                        className="block w-full p-2 rounded-md"
                    />
                </div>
                <div className="my-2">
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={values.email}
                        className="block w-full p-2 rounded-md"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="my-2">
                    <label>No Hp/Wa</label>
                    <input
                        name="noHp"
                        type="number"
                        onChange={handleChange}
                        value={values.noHp}
                        className="block w-full p-2 rounded-md"
                    />
                </div>
                <div className="my-2">
                    <label>Embed Google Maps</label>
                    <input
                        name="maps"
                        type="text"
                        onChange={handleChange}
                        value={values.maps}
                        className="block w-full p-2 rounded-md"
                    />
                </div>
            </div>
            <div className="my-2">
                <label>Alamat</label>
                <textarea
                    name="alamat"
                    onChange={handleChange}
                    value={values.alamat}
                    className="block w-full rounded-md"
                />
            </div>
            <div className="my-2">
                <label>Deskripsi (kalau bisa dijadikan 2 paragraf)</label>
                <textarea
                    rows={10}
                    name="deskripsiPerusahaan"
                    onChange={handleChange}
                    value={values.deskripsiPerusahaan}
                    className="block w-full rounded-md"
                />
            </div>

            <h1 className="text-xl mt-3">SOSMED</h1>
            <div className="my-2">
                <label>Link Instagram</label>
                <input
                    name="linkInstagram"
                    type="text"
                    onChange={handleChange}
                    value={values.linkInstagram}
                    className="block w-full p-2 rounded-md"
                />
            </div>
            <div className="my-2">
                <label>Link Twitter</label>
                <input
                    name="linkTwitter"
                    type="text"
                    onChange={handleChange}
                    value={values.linkTwitter}
                    className="block w-full  p-2 rounded-md"
                />
            </div>
            <div className="my-2">
                <label>Link Facebook</label>
                <input
                    name="linkFacebook"
                    type="text"
                    onChange={handleChange}
                    value={values.linkFacebook}
                    className="block p-2 w-full rounded-md"
                />
            </div>
            <button
                className="p-2 bg-blue-500 hover:bg-blue rounded-md text-white"
                onClick={submit}
            >
                Simpan
            </button>
        </>
    );
};

Index.layout = (page) => <Main children={page} />;
export default Index;
