require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import AOS from "aos";
import "aos/dist/aos.css";

// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
AOS.init();

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});

InertiaProgress.init({ color: "#4B5563" });
