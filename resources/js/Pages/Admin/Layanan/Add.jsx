import Main from "@/Layouts/Admin/Main";
import { Head, Link, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

const Add = ({ title }) => {

    const [values, setValues] = useState({
        namaLayanan: "",
        hrgTerrendah: "",
        hrgTertinggi: "",
        deskripsi: "",
        videoName: "",
        videoUrl: "",
        // imgName: "",
        // imgUrl: "",
    })

    function handleChange(e) {
        const value = e.target.value
        const name = e.target.name
        setValues(() => ({
            ...values,
            [name]: value
        }))
    }

    console.log(values)

    function submit() {
        // axios.post('/admin/layanan', values)
        //     .then((res) => console.log(res))

        router.post('/admin/layanan', { values, image })
    }

    //gambar utama
    const [image, setImage] = useState([]);
    console.log(image)
    const uploadImageUtama = () => {
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dodb6pecp',
            sources: ['local', 'camera', 'unsplash'],
            uploadPreset: 'h7dk2ojx',
            maxFiles: 4,
            folder: 'foto'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
                setImage((prev) => [...prev, ({ url: result.info.url, public_id: result.info.public_id })]);
                // const newOptions = {...values};
                // newOptions.imgUrl = result.info.url;
                // newOptions.imgName = result.info.public_id;
                // setValues(newOptions);
            }
        }
        )
        myWidget.open();
    }

    const uploadVideo = () => {
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dodb6pecp',
            sources: ['local', 'camera', 'unsplash'],
            uploadPreset: 'h7dk2ojx',
            maxFiles: 1,
            folder: 'video'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
                // setImage((prev) => [...prev, ({ url: result.info.url, public_id: result.info.public_id })]);
                const newOptions = { ...values };
                newOptions.videoUrl = result.info.url;
                newOptions.videoName = result.info.public_id;
                setValues(newOptions);
            }
        }
        )
        myWidget.open();
    }


    return (
        <>
            <Head title={title} />
            <div className="flex justify-between my-3">
                <h1 className="text-xl">{title}</h1>
                <div><Link href="/admin/layanan" className="text-white bg-gray-500 hover:bg-gray-600 rounded-lg p-2">Kembali</Link></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label>Nama Layanan</label>
                    <input onChange={handleChange} name="namaLayanan" className="p-2 rounded-md block w-full" />
                </div>
                <div>
                    <label>Harga Terrendah</label>
                    <input onChange={handleChange} name="hrgTerrendah" type="number" min={0} className="p-2 rounded-md block w-full" />
                </div>
                <div>
                    <label>Harga Tertinggi</label>
                    <input onChange={handleChange} name="hrgTertinggi" type="number" min={0} className="p-2 rounded-md block w-full" />
                </div>
                <div>
                    <label>Upload Gambar</label>
                    {image.length < 4 &&
                        <div className="flex">
                            <button onClick={uploadImageUtama} className="p-2 w-[75%] rounded-md block border-2">Upload gambar</button>
                            <div className="w-[25%]">{image.length}/4</div>
                        </div>
                    }
                    {image.length > 0 &&
                        <div className="grid grid-cols-4 gap-4">
                            {image.map((data, i) => (
                                <img src={data.url} className="w-20 h-20" />
                            ))}
                        </div>}
                </div>
                <div>
                    <label>Upload Gambar</label>
                    {values.videoName ? (<>
                        <video controls>
                            <source src={values.videoUrl} type="video/mp4" />
                        </video>
                    </>) : (
                        <button onClick={uploadVideo} className="p-2 rounded-md block w-full border-2">Upload video</button>
                    )}
                </div>
            </div>
            <div>
                <label>Deskripsi</label>
                <textarea onChange={handleChange} name="deskripsi" className="w-full rounded-md" rows={10} />
            </div>
            <button onClick={submit} className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">simpan</button>
        </>
    )
}

Add.layout = (page) => <Main children={page} />
export default Add;
