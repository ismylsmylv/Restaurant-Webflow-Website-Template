import {
    createBrowserRouter
} from "react-router-dom";
import HomePage from "../pages/home/index";
import AboutPage from "../pages/about/index";
import MenuPage from "../pages/menu/index";
import ErrorPage from "../pages/error/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/menu",
        element: <MenuPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },



]);

export default router