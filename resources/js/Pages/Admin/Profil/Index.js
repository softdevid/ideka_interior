import Main from "@/Layouts/Admin/Main";
import { router } from "@inertiajs/inertia-react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

const Index = ({ profil }) => {

    const [errors, setErrors] = useState({})

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
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const uploadLogo = () => {
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dodb6pecp',
            sources: ['local', 'camera', 'unsplash'],
            uploadPreset: 'h7dk2ojx',
            maxFiles: 1,
            folder: 'logo'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                // console.log('Done! Here is the image info: ', result.info);
                // setImage((prev) => [...prev, ({ url: result.info.url, public_id: result.info.public_id })]);
                const newOptions = { ...values };
                newOptions.logoImgUrl = result.info.url;
                newOptions.logoImgName = result.info.public_id;
                setValues(newOptions);
            }
        }
        )
        myWidget.open();
    }

    function submit() {
        // console.log(values)
        axios.patch(`/admin/profil/${profil.id}`, values)
            .then((res) => {
                toast.success(res.data.data, {
                    position: toast.POSITION.TOP_CENTER
                });

            })
            .catch((err) => setErrors(err.response.data.errors));
    }
    console.log(values.logoImgUrl)
    return (
        <>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="my-2">
                    <label>Nama Perusahaan</label>
                    <input name="namaPerusahaan" onChange={handleChange} value={values.namaPerusahaan} className="block w-full rounded-md" />
                </div>
                <div className="my-2">
                    <label>Email</label>
                    <input name="email" onChange={handleChange} value={values.email} className="block w-full rounded-md" />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="my-2">
                    <label>No Hp/Wa</label>
                    <input name="noHp" onChange={handleChange} value={values.noHp} className="block w-full rounded-md" />
                </div>
                <div className="my-2">
                    <label>Embed Google Maps</label>
                    <input name="maps" onChange={handleChange} value={values.maps} className="block w-full rounded-md" />
                </div>
                <div className="my-2">
                    <label>Logo (tidak wajib)</label>
                    {values.logoImgName ? <img src={`https://res.cloudinary.com/dodb6pecp/image/upload/ar_0.5,c_fill,g_auto,w_433/q_auto/f_auto/${values.logoImgName}`} className="w-20 h-20" /> : <button name="logo" onClick={uploadLogo} className="block w-[70%] rounded-md border-2">Upload Logo</button>}
                </div>
            </div>
            <div className="my-2">
                <label>Alamat</label>
                <textarea name="alamat" onChange={handleChange} value={values.alamat} className="block w-full rounded-md" />
            </div>
            <div className="my-2">
                <label>Deskripsi (kalau bisa dijadikan 2 paragraf)</label>
                <textarea name="deskripsiPerusahaan" onChange={handleChange} value={values.deskripsiPerusahaan} rows={12} className="block w-full rounded-md" />
            </div>

            <h1 className="text-xl mt-3">SOSMED</h1>
            <div className="my-2">
                <label>Link Instagram</label>
                <input name="linkInstagram" onChange={handleChange} value={values.linkInstagram} className="block w-full rounded-md" />
            </div>
            <div className="my-2">
                <label>Link Twitter</label>
                <input name="linkTwitter" onChange={handleChange} value={values.linkTwitter} className="block w-full rounded-md" />
            </div>
            <div className="my-2">
                <label>Link Facebook</label>
                <input name="linkFacebook" onChange={handleChange} value={values.linkFacebook} className="block w-full rounded-md" />
            </div>
            <button className="p-2 bg-blue-500 hover:bg-blue text-white" onClick={submit}>Simpan</button>
        </>
    )
}

Index.layout = (page) => <Main children={page} />
export default Index;
