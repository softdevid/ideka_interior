import Main from "@/Layouts/Admin/Main";
import { Head, Link } from "@inertiajs/inertia-react";
import { useState } from "react";

const BannerAdd = ({ title, cloudName, uploadPresetName }) => {
    const [values, setValues] = useState({
        imgName: '',
        imgUrl: '',
    })
    console.log(values)

    const uploadFoto = () => {
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: cloudName,
            sources: ['local', 'camera', 'unsplash'],
            uploadPreset: uploadPresetName,
            maxFiles: 1,
            folder: 'banner'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
                // setImage((prev) => [...prev, ({ url: result.info.url, public_id: result.info.public_id })]);
                const newOptions = { ...values };
                newOptions.imgUrl = result.info.url;
                newOptions.imgName = result.info.public_id;
                setValues(newOptions);
            }
        }
        )
        myWidget.open();
    }

    function submit() {
        axios.post('/admin/banner', values)
    }

    return (
        <>
            <Head title={title} />
            <div className="flex justify-between my-3">
                <h1 className="text-xl">{title}</h1>
                <div><Link href="/admin/banner" className="text-white bg-gray-500 hover:bg-gray-600 rounded-lg p-2">Kembali</Link></div>
            </div>

            <div>
                <label>Upload Foto</label>
                {values.imgName ?
                    <img src={values.imgUrl} className="w-32 h-auto" /> :
                    <button onClick={uploadFoto} className="border p-2 rounded-md block">Upload</button>
                }
            </div>

            <button onClick={submit} className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4">Simpan</button>
        </>
    )
}

BannerAdd.layout = (page) => <Main children={page} />
export default BannerAdd;
