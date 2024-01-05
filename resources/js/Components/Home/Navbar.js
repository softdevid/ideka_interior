import React, { Fragment, useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { url } = usePage();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const links = [
        { href: "/profil", label: "Tentang Kami" },
        // { href: "/tim", label: "Tentang Tim" },
        // { href: "/fase-kerja", label: "Fase Kerja" },
        // { href: "/lingkup-kerja", label: "Lingkup Pekerjaan" },
        // { href: "/ruang-pertanyaan", label: "Ruang Pertanyaan" },
    ];

    return (
        <nav className="bg-slate-100 p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center">
                {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                <h1 className=" text-xl uppercase">Interior House</h1>
            </div>
            <div className="flex items-center space-x-4 lg:hidden">
                <button
                    onClick={toggleSidebar}
                    type="button"
                    className="bg-slate-200 inline-flex items-center justify-center p-2 rounded-md text-black  hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!sidebarOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div className="hidden lg:block z-50">
                <div className="flex items-baseline space-x-4">
                    <Link
                        href="/"
                        className={
                            url === "/"
                                ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                        }
                        aria-current="page"
                    >
                        Beranda
                    </Link>

                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center text-black hover:text-white hover:bg-blue-600 rounded py-2 px-5 font-bold">
                                Tentang
                                <ArrowDownIcon
                                    className="ml-2 -mr-1 h-5 w-5 "
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-white rounded-md bg-slate-100 shadow-lg ring-1 ring-white ring-opacity-50 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    {links.map((link, index) => (
                                        /* Use the `active` state to conditionally style the active item. */
                                        <Menu.Item key={index} as={Fragment}>
                                            {({ active }) => (
                                                <Link
                                                    href={link.href}
                                                    className={`${
                                                        active
                                                            ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                                            : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                                                    }`}
                                                >
                                                    {link.label}
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Link
                        href="/layanan"
                        className={
                            url === "/layanan"
                                ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                        }
                        aria-current="page"
                    >
                        Layanan
                    </Link>
                    <Link
                        href="/hasil-kerja"
                        className={
                            url === "/hasil-kerja"
                                ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                        }
                        aria-current="page"
                    >
                        Hasil Kerja
                    </Link>
                    <Link
                        href="/kontak"
                        className={
                            url === "/kontak"
                                ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                        }
                        aria-current="page"
                    >
                        Kontak
                    </Link>
                </div>
            </div>
            {sidebarOpen && (
                <div className="z-50 lg:hidden absolute top-0 left-0 w-64 bg-slate-100 h-full p-4 shadow">
                    <div className="flex justify-center items-center mb-4">
                        {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                        <h1 className="text-xl uppercase">Interior House</h1>
                    </div>
                    <hr className="h-px py-0.5 mb-4 bg-black border-0" />

                    <div className="h-full  py-4 overflow-y-auto">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link
                                    href="/"
                                    className={
                                        url === "/"
                                            ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                            : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                                    }
                                    aria-current="page"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                >
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center text-black hover:text-white hover:bg-blue-600 rounded py-2 px-5 font-bold">
                                            Tentang
                                            <ArrowDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 "
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute left-1 mt-2 w-48 origin-top-right divide-y divide-white rounded-md bg-slate-100 shadow-lg ring-1 ring-white ring-opacity-50 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                {links.map((link, index) => (
                                                    <Menu.Item
                                                        key={index}
                                                        as={Fragment}
                                                    >
                                                        {({ active }) => (
                                                            <Link
                                                                href={link.href}
                                                                className={`${
                                                                    active
                                                                        ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                                                        : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                                                                }`}
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </li>
                            <li>
                                <Link
                                    href="/layanan"
                                    className={
                                        url === "/layanan"
                                            ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                            : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                                    }
                                    aria-current="page"
                                >
                                    Layanan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/hasil-kerja"
                                    className={
                                        url === "/hasil-kerja"
                                            ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                            : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                                    }
                                    aria-current="page"
                                >
                                    Hasil Kerja
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kontak"
                                    className={
                                        url === "/kontak"
                                            ? "active text-white bg-blue-600 rounded block py-2 px-5 font-bold"
                                            : " hover:text-white hover:bg-blue-600 block py-2 px-5 font-bold"
                                    }
                                    aria-current="page"
                                >
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}
