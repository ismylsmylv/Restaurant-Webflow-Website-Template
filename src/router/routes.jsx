import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../pages/home/index'
import About from '../pages/about/index'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

export default router