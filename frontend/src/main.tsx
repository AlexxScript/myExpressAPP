import React from "react";
import { createRoot } from "react-dom/client";
import { 
    createBrowserRouter,
    RouterProvider
 } from "react-router-dom";
import App from "./App";
import FormRegister from "./routes/FormRegister";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/register",
        element: <FormRegister/>
    }
])

const root = createRoot(document.getElementById('app')!);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);