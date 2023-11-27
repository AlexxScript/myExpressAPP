import { Navigate, Outlet, redirect } from "react-router-dom";
import { useContext } from "react";
import AuthenticatedContext from "../context/AuthContext";

const Dashboard = () => {

    const contextAu = useContext(AuthenticatedContext);

    if (contextAu.user.state === "unauthenticated") return <Navigate to="/login" replace/>
    
    return ( 
        <div>
            <h1>Dashboard</h1>
            <Outlet/>
        </div>
    );
};

export default Dashboard;