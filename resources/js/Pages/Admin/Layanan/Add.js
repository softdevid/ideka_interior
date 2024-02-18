import Main from "@/Layouts/Admin/Main";
import { ListBulletIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { Fragment,useState } from "react";
import { Dialog, Transition } from '@headlessui/react'

const Add = ({ title, kategori }) => {
    const [values, setValues] = useState({
        namaLayanan: "",
        hrgTerrendah: "",
        hrgTertinggi: "",
        deskripsi: "",
        // imgName: "",
        // imgUrl: "",
        videoName: "",
        videoUrl: "",
        idKategori:"",
    });

    const [isFormValid, setIsFormValid] = useState(false);


    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        validateForm();
    }

    function validateForm() {
        const isValid = Object.values(values).every((val) => val !== "");
        setIsFormValid(isValid);
    }



    function submit() {
        if (isFormValid) {
            Inertia.post('/admin/layanan', { values, image });
        }

        // router.post("/admin/layanan", values);
    }

    //gambar utama
    const [image, setImage] = useState([]);
    const uploadImageUtama = () => {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dodb6pecp",
                sources: ["local", "camera", "unsplash"],
                uploadPreset: "h7dk2ojx",
                maxFiles: 30,
                folder: "foto",
                // cropping: true,  // Menyertakan opsi cropping
                // croppingAspectRatio: 16 / 9,  // Rasio aspek crop 16:9
                // gravity: "auto",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    setImage((prev) => [...prev, ({ imgUrl: result.info.url, imgName: result.info.public_id })]);
                    console.log(image)
                    // const newOptions = { ...values };
                    // newOptions.imgUrl = result.info.url;
                    // newOptions.imgName = result.info.public_id;
                    // setValues(newOptions);
                }
            }
        );
        myWidget.open();
    };

    const uploadVideo = () => {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dodb6pecp",
                sources: ["local", "camera", "unsplash"],
                uploadPreset: "h7dk2ojx",
                maxFiles: 1,
                folder: "video",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    // setImage((prev) => [...prev, ({ url: result.info.url, public_id: result.info.public_id })]);
                    const newOptions = { ...values };
                    newOptions.videoUrl = result.info.url;
                    newOptions.videoName = result.info.public_id;
                    setValues(newOptions);
                }
            }
        );
        myWidget.open();
    };

    const deleteImage = (im, index) => {
        console.log(im, index)
        axios.post(`/delete-image`, {imgName:im.imgName})
        .then(() => {
            setImage(image.filter((_, i) => i !== index));
            console.log(image)
        })
    }

    function deleteVideo() {
        axios.post('/delete-video', {videoName: values.videoName})
            .then(() => {
                setValues((prev) => ({ ...prev, videoUrl: "", videoName: "" }));
            })
    }

    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(!isOpen)
  }

  function openModal() {
    setIsOpen(!isOpen)
  }

    return (
        <>
            <Head title={title} />
            <div className="flex justify-between my-3">
                <h1 className="text-xl">{title}</h1>
                <div>
                    <Link
                        href="/admin/layanan"
                        className="text-white bg-gray-500 hover:bg-gray-600 rounded-lg p-2"
                    >
                        Kembali
                    </Link>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div>
                    <label>Kategori</label>
                    <select onChange={handleChange} name="idKategori" className="p-2 rounded-md block w-full">
                        <option value="">Pilih kategori</option>
                        {kategori.length > 0 ? (
                            kategori.map((data,i) => {
                                return <option value={data.id}>{data.namaKategori}</option>
                            })
                        ) : (
                            <></>
                        )}
                    </select>
                </div>
                <div>
                    <label>Nama Layanan</label>
                    <input type="text"
                        onChange={handleChange}
                        name="namaLayanan"
                        className="p-2 rounded-md block w-full" disabled={values.idKategori === 'no'}
                    />
                </div>
                <div>
                    <label>Harga Terrendah</label>
                    <input
                        onChange={handleChange}
                        name="hrgTerrendah"
                        type="number"
                        min={0}
                        className="p-2 rounded-md block w-full" disabled={values.idKategori === 'no'}
                    />
                </div>
                <div>
                    <label>Harga Tertinggi</label>
                    <input
                        onChange={handleChange}
                        name="hrgTertinggi"
                        type="number"
                        min={0}
                        className="p-2 rounded-md block w-full" disabled={values.idKategori === 'no'}
                    />
                </div>
                <div>
                    <label>Upload Gambar</label>
                    <div className="flex">
                        <button onClick={uploadImageUtama} disabled={values.idKategori === 'no'} className="p-2 rounded-md block w-[80%] border-2">Upload gambar</button>
                        {image ? <button onClick={openModal} className="w-[20%]"><ListBulletIcon className="w-6 h-6 text-green-500 font-bold" /></button> : <></>}
                    </div>

                </div>
                <div>
                    <label>Upload Video</label>
                    {values.videoName ? (
                        <>
                            <video controls>
                                <source
                                    src={values.videoUrl}
                                    type="video/mp4"
                                />
                            </video>
                            <span onClick={deleteVideo}><XMarkIcon className="w-5 h-5 bg-red-500" /></span>
                        </>
                    ) : (
                        <>
                        <button
                            onClick={uploadVideo} disabled={values.idKategori === 'no'}
                            className="p-2 rounded-md block w-full border-2"
                        >
                            Upload video
                        </button>
                        </>
                    )}
                </div>
            </div>
            <div>
                <label>Deskripsi</label>
                <textarea
                    onChange={handleChange} disabled={values.idKategori === 'no'}
                    name="deskripsi"
                    className="w-full"
                    rows={10}
                />
            </div>
            <button onClick={submit} className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2" disabled={!isFormValid}>simpan</button>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} openModal={closeModal} image={image} deleteImage={deleteImage} />
        </>
    );
};


function Modal({isOpen, setIsOpen, closeModal, openModal, deleteImage, image}) {

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Daftar gambar
                  </Dialog.Title>
                  <div className="mt-2">
                  <div className="block">
                            <div className="grid grid-cols-3 gap-2 mt-1">
                                {image.map((im, index) => {
                                    return (
                                        <>
                                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <img src={im.imgUrl} className="w-full" />
                                            <button onClick={() => deleteImage(im, index)} style={{ marginTop: '-1.5rem' }} className="bg-red-500 hover:bg-red-600 text-white p-2">
                                                <XMarkIcon className="w-6 h-6 p-1" />
                                            </button>
                                        </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


Add.layout = (page) => <Main children={page} />;
export default Add;
