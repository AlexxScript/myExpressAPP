import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthenticatedContext from "../context/AuthContext";
import DashboardMenu from "../components/DashboardMenu";

const Dashboard = () => {

    const contextAu = useContext(AuthenticatedContext);

    if (contextAu.user.state === "unauthenticated") return <Navigate to="/login" replace/>
    
    return ( 
        <div className="dashContainer">
            <DashboardMenu/>
            <Outlet/>
        </div>
    );
};

export default Dashboard;