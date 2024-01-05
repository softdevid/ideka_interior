import Main from "@/Layouts/Admin/Main";
import React, { useState } from "react";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

const Index = ({ profil }) => {
    const [errors, setErrors] = useState({});

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

    function submit() {
        // console.log(values)
        axios
            .patch(`/admin/profil/${profil.id}`, values)
            .then((res) => {
                toast.success(res.data.data, {
                    position: toast.POSITION.TOP_CENTER,
                });
            })
            .catch((err) => setErrors(err.response.data.errors));
    }
    return (
        <>
            {/* {}
        <div className="w-full p-4 bg-green-500"></div> */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="my-2">
                    <label>Nama Perusahaan</label>
                    <input
                        name="namaPerusahaan"
                        onChange={handleChange}
                        value={values.namaPerusahaan}
                        className="block w-full rounded-md"
                    />
                </div>
                <div className="my-2">
                    <label>Email</label>
                    <input
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        className="block w-full rounded-md"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="my-2">
                    <label>No Hp/Wa</label>
                    <input
                        name="noHp"
                        onChange={handleChange}
                        value={values.noHp}
                        className="block w-full rounded-md"
                    />
                </div>
                <div className="my-2">
                    <label>Embed Google Maps</label>
                    <input
                        name="maps"
                        onChange={handleChange}
                        value={values.maps}
                        className="block w-full rounded-md"
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
                    onChange={handleChange}
                    value={values.linkInstagram}
                    className="block w-full rounded-md"
                />
            </div>
            <div className="my-2">
                <label>Link Twitter</label>
                <input
                    name="linkTwitter"
                    onChange={handleChange}
                    value={values.linkTwitter}
                    className="block w-full rounded-md"
                />
            </div>
            <div className="my-2">
                <label>Link Facebook</label>
                <input
                    name="linkFacebook"
                    onChange={handleChange}
                    value={values.linkFacebook}
                    className="block w-full rounded-md"
                />
            </div>
            <button
                className="p-2 bg-blue-500 hover:bg-blue text-white"
                onClick={submit}
            >
                Simpan
            </button>
        </>
    );
};

Index.layout = (page) => <Main children={page} />;
export default Index;
