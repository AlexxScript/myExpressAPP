import { Link } from "react-router-dom"

const DashboardMenu = () => {
    return (
        <div className="[grid-area:dashMenu] bg-slate-500 h-screen fixed w-1/4">
            <nav>
                <ul className="flex flex-col">
                    <li><Link to="/">Home</Link></li>
                    <li><button>Log out</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default DashboardMenu;