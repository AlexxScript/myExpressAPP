import React, { useEffect, useState } from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "../App";
import FormRegister from "../routes/FormRegister";
import FormLogIn from "../routes/FormLogIn";
import Dashboard from "../routes/Dashboard";
import EditTask from "../routes/EditTask";
import AuthenticatedContext from "../context/AuthContext";

const router = createBrowserRouter([{
    path: "/",
    element: <App />
}, {
    path: "/register",
    element: <FormRegister />
}, {
    path: "/login",
    element: <FormLogIn />
}, {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
        {
            path: "/dashboard/edit",
            element: <EditTask />
        }
    ]
}
])

const AppAuth = () => {

    const [user, setUser] = useState({
        message:"",
        state: "unauthenticated"
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("http://localhost:8080/",{
                    credentials:"include"
                });
                const data = await res.json();
                setUser({
                    state: data.state,
                    message: data.message
                })
                console.log(user.state);
                return data    
            } catch (error:any) {
                console.log(error)
                setUser(error)
            }
        }
        loadData()
    },[]);
    
    return (
        <React.StrictMode>
            <AuthenticatedContext.Provider value={{ user, setUser }}>
                <RouterProvider router={router} />
            </AuthenticatedContext.Provider>
        </React.StrictMode>
    )
}

export default AppAuth;