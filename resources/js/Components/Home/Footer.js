import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="bg-[#283618] text-white">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link
                                href="https://flowbite.com/"
                                className="flex items-center"
                            >
                                <img
                                    src="https://flowbite.com/docs/images/logo.svg"
                                    className="h-8 mr-3"
                                    alt="FlowBite Logo"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                                    Interior House
                                </span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                                    Resources
                                </h2>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link
                                            href="https://flowbite.com/"
                                            className="hover:underline"
                                        >
                                            Flowbite
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://tailwindcss.com/"
                                            className="hover:underline"
                                        >
                                            Tailwind CSS
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                                    Follow us
                                </h2>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link
                                            href="https://github.com/themesberg/flowbite"
                                            className="hover:underline "
                                        >
                                            Github
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://discord.gg/4eeurUVvTy"
                                            className="hover:underline"
                                        >
                                            Discord
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                                    Legal
                                </h2>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link
                                            href="#"
                                            className="hover:underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:underline"
                                        >
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="flex items-center justify-center">
                        <span className="text-sm text-white sm:text-center">
                            © 2023{" "}
                            <Link
                                href="https://flowbite.com/"
                                className="hover:underline"
                            >
                                InteriorHouse™
                            </Link>
                            . All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}
