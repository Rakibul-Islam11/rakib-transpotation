import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("Current Pathname:", pathname); // ডিবাগging
        window.scrollTo(0, 0); // পেজ স্ক্রল টপে নিয়ে যাওয়ার জন্য
    }, [pathname]);

    return null;
};

export default ScrollToTop;
