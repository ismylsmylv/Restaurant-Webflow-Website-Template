import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Navbar from "./components/navbar/index.tsx";
import "./index.css";
import router from "./router/routes.jsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}>
    <Navbar />
    <App />
  </RouterProvider>
);
