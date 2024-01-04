import Sidebar from "@/Components/Admin/Sidebar";
import Navbar from "../../Components/Admin/Navbar";
import { AdminContext } from "@/context/admin-context";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

const Main = ({ children }) => {
    const { props, url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const appContextValue = {
        props,
        url,
        mobileMenuOpen, setMobileMenuOpen
    };
    return (
        <>
            <AdminContext.Provider value={appContextValue}>
                <Navbar />
                <Sidebar />
                <div className="p-4 mt-12 md:ml-64 lg:mt-12">{children}</div>
            </AdminContext.Provider>
        </>
    )
}

export default Main;
