import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes.jsx";
import Navbar from "./components/navbar/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}>
    <Navbar />
    <App />
  </RouterProvider>
);
