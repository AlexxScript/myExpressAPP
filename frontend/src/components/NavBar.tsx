import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navhome w-[100%] p-2 fixed top-0">
            <ul className="flex w-[80%] mx-auto justify-end gap-6">
                <li className="p-3 border-2 border-[#659bab] rounded-md hover:border-[#2F2E41] transition-all duration-200"><Link to="/register">Register</Link></li>
                <li className="p-3 border-2 border-[#659bab] rounded-md hover:border-[#2F2E41] transition-all duration-200"><Link to="/login">Log in</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;