import FlashMessage from "@/Components/FlashMessage";
import Main from "@/Layouts/Admin/Main";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

const Index = (props) => {
    const [errors, setErrors] = useState({});
    const [notif, setNotif] = useState(false)

    const [values, setValues] = useState({
        namaPerusahaan: props.profil.namaPerusahaan,
        deskripsiPerusahaan: props.profil.deskripsiPerusahaan,
        linkInstagram: props.profil.linkInstagram,
        linkTwitter: props.profil.linkTwitter,
        linkFacebook: props.profil.linkFacebook,
        email: props.profil.email,
        noHp: props.profil.noHp,
        alamat: props.profil.alamat,
        maps: props.profil.maps,
        logoImgName: props.profil.logoImgName,
        logoImgUrl: props.profil.logoImgUrl,
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function submit() {
        Inertia.patch(`/admin/profil/${props.profil.id}`, values)
        setNotif(!notif)
        setTimeout(() => {
            setNotif(false)
        }, 3000);
    }
    return (
        <>
            {notif && (
                <FlashMessage value={props.flash.message} />
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
