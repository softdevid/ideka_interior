import Navbar from "@/Components/Home/Navbar";
import Footer from "@/Components/Home/Footer";
import React from "react";
import ScrollToTopButton from "@/Components/Home/ScrollToTopButton";

const Main = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default Main;
