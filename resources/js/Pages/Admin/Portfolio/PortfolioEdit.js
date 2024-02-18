import FlashMessage from "@/Components/FlashMessage";
import Main from "@/Layouts/Admin/Main";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

const PortfolioEdit = (props) => {
    const [errors, setErrors] = useState({});
    const [notif, setNotif] = useState(false)

    const [values, setValues] = useState({
        judul: props.portfolio.judul,
        deskripsi: props.portfolio.deskripsi,
        idKategori: props.portfolio.idKategori,
        imgName1: props.portfolio.imgName1,
        imgUrl1: props.portfolio.imgUrl1,
        imgName2: props.portfolio.imgName2,
        imgUrl2: props.portfolio.imgUrl2,
        imgName3: props.portfolio.imgName3,
        imgUrl3: props.portfolio.imgUrl3,
        imgName4: props.portfolio.imgName4,
        imgUrl4: props.portfolio.imgUrl4,
        imgName5: props.portfolio.imgName5,
        imgUrl5: props.portfolio.imgUrl5,
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
        Inertia.put(`/admin/portfolio/${props.portfolio.id}`, values)
        setNotif(!notif)
        setTimeout(() => {
            setNotif(false)
        }, 3000);
    }

    function deleteImage(data) {
        const name = data.imgName;
        const url = data.imgUrl;
        setValues((values) => ({
            ...values,
            [name]: "",
        }));
        setValues((values) => ({
            ...values,
            [url]: "",
        }));
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
                        className="text-white bg-gray-500 hover:bg-gray-600 rounded-lg p-2"
                    >
                        Kembali
                    </Link>
                </div>
            </div>

            <div>
                    <label>Kategori</label>
                    <select onChange={handleChange} name="idKategori" className="p-2 rounded-md block w-full">
                        <option value="">Pilih kategori</option>
                        {props.kategori.length > 0 ? (
                            props.kategori.map((data,i) => {
                                return <option value={data.id} selected={values.idKategori === data.id}>{data.namaKategori}</option>
                            })
                        ) : (
                            <></>
                        )}
                    </select>
                    <span className="text-red-500 text-xs">{props.errors && props.errors.idKategori}</span>
                </div>
                <div className="my-2">
                    <label>Judul</label>
                    <input
                        name="judul"
                        type="text"
                        onChange={handleChange}
                        value={values.judul}
                        className="block w-full p-2 rounded-md"  disabled={values.idKategori === ''}
                    />
                    <span className="text-red-500 text-xs">{props.errors && props.errors.judul}</span>
                </div>
                <div className="my-2">
                    <label>Deskripsi</label>
                    <textarea
                        name="deskripsi"
                        type="text"
                        onChange={handleChange}
                        value={values.deskripsi}
                        className="block w-full rounded-md" rows={6}  disabled={values.idKategori === ''}
                    />
                    <span className="text-red-500 text-xs">{props.errors && props.errors.deskripsi}</span>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    <div>
                    <label>Gambar 1</label>
                    {values.imgName1 ?
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <img src={values.imgUrl1} className="w-20" />
                        <button onClick={() => deleteImage({imgName: "imgName1", imgUrl: "imgUrl1"})} style={{ marginTop: '-1.5rem' }} className="bg-red-500 hover:bg-red-600 text-white w-auto">
                            <XMarkIcon className="w-6 h-6 p-1" />
                        </button>
                    </div>
                    : <button onClick={() => uploadImage1()}  disabled={values.idKategori === ''} className="p-2 w-full rounded-md border">Gambar 1</button> }
                    </div>
                    <span className="text-red-500 text-xs">{props.errors && props.errors.imgName1}</span>
                    <div>
                    <label>Gambar 2</label>
                    {values.imgName2 ?
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <img src={values.imgUrl2} className="w-20" />
                        <button onClick={() => deleteImage({imgName: "imgName2", imgUrl: "imgUrl2"})} style={{ marginTop: '-1.5rem' }} className="bg-red-500 hover:bg-red-600 text-white w-auto">
                            <XMarkIcon className="w-6 h-6 p-1" />
                        </button>
                    </div>
                    : <button onClick={() => uploadImage2()}  disabled={values.idKategori === ''} className="p-2 w-full rounded-md border">Gambar 1</button> }
                    </div>
                    <span className="text-red-500 text-xs">{props.errors && props.errors.imgName2}</span>
                    <div>
                    <label>Gambar 3</label>
                    {values.imgName3 ?
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <img src={values.imgUrl3} className="w-20" />
                        <button onClick={() => deleteImage({imgName: "imgName3", imgUrl: "imgUrl3"})} style={{ marginTop: '-1.5rem' }} className="bg-red-500 hover:bg-red-600 text-white w-auto">
                            <XMarkIcon className="w-6 h-6 p-1" />
                        </button>
                    </div>
                    : <button onClick={() => uploadImage3()} disabled={values.idKategori === ''} className="p-2 w-full rounded-md border">Gambar 3</button> }
                    </div>
                    <span className="text-red-500 text-xs">{props.errors && props.errors.imgName3}</span>
                    <div>
                    <label>Gambar 4</label>
                    {values.imgName4 ?
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <img src={values.imgUrl4} className="w-20" />
                        <button onClick={() => deleteImage({imgName: "imgName4", imgUrl: "imgUrl4"})} style={{ marginTop: '-1.5rem' }} className="bg-red-500 hover:bg-red-600 text-white w-auto">
                            <XMarkIcon className="w-6 h-6 p-1" />
                        </button>
                    </div>
                    : <button onClick={() => uploadImage4()}  disabled={values.idKategori === ''} className="p-2 w-full rounded-md border">Gambar 4</button>}
                    </div>
                    <span className="text-red-500 text-xs">{props.errors && props.errors.imgName4}</span>
                    <div>
                    <label>Gambar 5</label>
                    {values.imgName5 ?
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <img src={values.imgUrl5} className="w-20" />
                        <button onClick={() => deleteImage({imgName: "imgName5", imgUrl: "imgUrl5"})} style={{ marginTop: '-1.5rem' }} className="bg-red-500 hover:bg-red-600 text-white w-auto">
                            <XMarkIcon className="w-6 h-6 p-1" />
                        </button>
                    </div>
                    : <button onClick={() => uploadImage5()}  disabled={values.idKategori === ''} className="p-2 w-full rounded-md border">Gambar 5</button>}
                    </div>
                    <span className="text-red-500 text-xs">{props.errors && props.errors.imgName5}</span>
                </div>

            <button
                className="p-2 mt-2 bg-blue-500 hover:bg-blue rounded-md text-white"
                onClick={submit}
            >
                Simpan
            </button>
        </>
    );
};

PortfolioEdit.layout = (page) => <Main children={page} />;
export default PortfolioEdit;
