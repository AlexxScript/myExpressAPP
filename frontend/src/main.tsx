import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { 
    createBrowserRouter,
    RouterProvider
 } from "react-router-dom";
import App from "./App";
import FormRegister from "./routes/FormRegister";
import FormLogIn from "./routes/FormLogIn";
import Dashboard from "./routes/Dashboard";
import CreateTask from "./routes/CreateTask";

const router = createBrowserRouter([{
        path: "/",
        element: <App/>
    },{
        path: "/register",
        element: <FormRegister/>
    },{
        path:"/login",
        element: <FormLogIn/>
    },{
        path:"/dashboard",
        element:<Dashboard/>,
        children: [
            {
                path:"/dashboard/create",
                element: <CreateTask/>
            }
        ]
    }
])

const root = createRoot(document.getElementById('app')!);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);