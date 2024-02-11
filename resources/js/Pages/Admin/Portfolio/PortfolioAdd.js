import FlashMessage from "@/Components/FlashMessage";
import Main from "@/Layouts/Admin/Main";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

const PortfolioAdd = (props) => {
    const [errors, setErrors] = useState({});
    const [notif, setNotif] = useState(false)

    const [values, setValues] = useState({
        judul: "",
        deskripsi: "",
        idKategori: "no",
        imgName1: "",
        imgUrl1: "",
        imgName2: "",
        imgUrl2: "",
        imgName3: "",
        imgUrl3: "",
        imgName4: "",
        imgUrl4: "",
        imgName5: "",
        imgUrl5: "",
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
        Inertia.post(`/admin/portfolio`, values)
        setNotif(!notif)
        setTimeout(() => {
            setNotif(false)
        }, 3000);
    }

    const uploadImage1 = () => {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dodb6pecp",
                sources: ["local", "camera", "unsplash"],
                uploadPreset: "h7dk2ojx",
                maxFiles: 1,
                folder: "portfolio",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    // console.log("Done! Here is the image info: ", result.info);
                    // setImage((prev) => [...prev, ({ url: result.info.url, public_id: result.info.public_id })]);
                    const newOptions = { ...values };
                    newOptions.imgUrl1 = result.info.url;
                    newOptions.imgName1 = result.info.public_id;
                    setValues(newOptions);
                    console.log(values)
                }
            }
        );
        myWidget.open();
    };
    const uploadImage2 = () => {
        var myWidget = window.cloudinary.createUploadWidget(
            {cloudName: "dodb6pecp",sources: ["local", "camera", "unsplash"],uploadPreset: "h7dk2ojx",maxFiles: 1,folder: "portfolio"},
            (error, result) => {
                if (!error && result && result.event === "success") {
                        const newOptions = { ...values };
                        newOptions.imgUrl2 = result.info.url;
                        newOptions.imgName2 = result.info.public_id;
                        setValues(newOptions);
                }
            }
        );
        myWidget.open();
    };
    const uploadImage3 = () => {
        var myWidget = window.cloudinary.createUploadWidget(
            {cloudName: "dodb6pecp",sources: ["local", "camera", "unsplash"],uploadPreset: "h7dk2ojx",maxFiles: 1,folder: "portfolio"},
            (error, result) => {
                if (!error && result && result.event === "success") {
                        const newOptions = { ...values };
                        newOptions.imgUrl3 = result.info.url;
                        newOptions.imgName3 = result.info.public_id;
                        setValues(newOptions);
                }
            }
        );
        myWidget.open();
    };
    const uploadImage4 = () => {
        var myWidget = window.cloudinary.createUploadWidget(
            {cloudName: "dodb6pecp",sources: ["local", "camera", "unsplash"],uploadPreset: "h7dk2ojx",maxFiles: 1,folder: "portfolio"},
            (error, result) => {
                if (!error && result && result.event === "success") {
                        const newOptions = { ...values };
                        newOptions.imgUrl4 = result.info.url;
                        newOptions.imgName4 = result.info.public_id;
                        setValues(newOptions);
                }
            }
        );
        myWidget.open();
    };
    const uploadImage5 = () => {
        var myWidget = window.cloudinary.createUploadWidget(
            {cloudName: "dodb6pecp",sources: ["local", "camera", "unsplash"],uploadPreset: "h7dk2ojx",maxFiles: 1,folder: "portfolio"},
            (error, result) => {
                if (!error && result && result.event === "success") {
                        const newOptions = { ...values };
                        newOptions.imgUrl5 = result.info.url;
                        newOptions.imgName5 = result.info.public_id;
                        setValues(newOptions);
                }
            }
        );
        myWidget.open();
    };
    return (
        <>
        <Head title={props.title} />
            <div className="flex justify-between my-2">
                <h1 className="text-xl">{props.title}</h1>
                <div>
                    <Link
                        href="/admin/portfolio"
                        className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg p-2"
                    >
                        Kembali
                    </Link>
                </div>
            </div>

            <div>
                    <label>Kategori</label>
                    <select onChange={handleChange} name="idKategori" className="p-2 rounded-md block w-full">
                        <option value="no">Pilih kategori</option>
                        {props.kategori.length > 0 ? (
                            props.kategori.map((data,i) => {
                                return <option value={data.id}>{data.namaKategori}</option>
                            })
                        ) : (
                            <></>
                        )}
                    </select>
                </div>
                <div className="my-2">
                    <label>Judul</label>
                    <input
                        name="judul"
                        type="text"
                        onChange={handleChange}
                        value={values.judul}
                        className="block w-full p-2 rounded-md"  disabled={values.idKategori === 'no'}
                    />
                </div>
                <div className="my-2">
                    <label>Deskripsi</label>
                    <textarea
                        name="deskripsi"
                        type="text"
                        onChange={handleChange}
                        value={values.deskripsi}
                        className="block w-full rounded-md" rows={6}  disabled={values.idKategori === 'no'}
                    />
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    <div>
                    <label>Gambar 1</label>
                    {values.imgName1 ? <img src={values.imgUrl1} className="w-20" /> : <button onClick={() => uploadImage1()}  disabled={values.idKategori === 'no'} className="p-2 w-full rounded-md border">Gambar 1</button> }
                    </div>
                    <div>
                    <label>Gambar 2</label>
                    {values.imgName2 ? <img src={values.imgUrl2} className="w-20" /> : <button onClick={() => uploadImage2()}  disabled={values.idKategori === 'no'} className="p-2 w-full rounded-md border">Gambar 1</button> }
                    </div>
                    <div>
                    <label>Gambar 3</label>
                    {values.imgName3 ? <img src={values.imgUrl3} className="w-20" /> : <button onClick={() => uploadImage3()} disabled={values.idKategori === 'no'} className="p-2 w-full rounded-md border">Gambar 3</button> }
                    </div>
                    <div>
                    <label>Gambar 4</label>
                    {values.imgName4 ? <img src={values.imgUrl4} className="w-20" /> : <button onClick={() => uploadImage4()}  disabled={values.idKategori === 'no'} className="p-2 w-full rounded-md border">Gambar 4</button>}
                    </div>
                    <div>
                    <label>Gambar 5</label>
                    {values.imgName5 ? <img src={values.imgUrl5} className="w-20" /> : <button onClick={() => uploadImage5()}  disabled={values.idKategori === 'no'} className="p-2 w-full rounded-md border">Gambar 5</button>}
                    </div>
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

PortfolioAdd.layout = (page) => <Main children={page} />;
export default PortfolioAdd;
