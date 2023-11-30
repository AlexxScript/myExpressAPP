import { useContext } from "react";
import { Link, Navigate } from "react-router-dom"
import AuthenticatedContext from "../context/AuthContext";

const DashboardMenu = () => {

    const contextAu = useContext(AuthenticatedContext);

    const logoutFunction = async () => {
        try {
            const res = await fetch("http://localhost:8080/user/logout", {
                method: "POST",
                credentials: "include"
            });
            const data = await res.json()
            console.log(data);
            contextAu.setUser({
                message:data.message,
                state:data.state
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    if (contextAu.user.state === "unauthenticated") return <Navigate to="/login" />

    return (
        <div className="[grid-area:dashMenu] bg-slate-500 h-screen fixed w-1/4">
            <nav>
                <ul className="flex flex-col">
                    <li><Link to="/">Home</Link></li>
                    <li><button onClick={logoutFunction}>Log out</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default DashboardMenu;