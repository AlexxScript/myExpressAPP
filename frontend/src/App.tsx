import { useContext } from "react";
import AuthenticatedContext from "./context/AuthContext";
import NavBar from "./components/NavBar";
import HomeContentUn from "./components/HomeContentAut";
import HomeContentAut from "./components/HomeContentAut";

const App = () => {

    const contextAuth = useContext(AuthenticatedContext);
    console.log(contextAuth.user);
    if (contextAuth.user.state === "unauthenticated") {
        return (
            <div>
                <NavBar />
                <HomeContentUn />
            </div>
        )
    } else {
        return (
            <div>
                <NavBar />
                <HomeContentAut />
            </div>
        )
    }
}

export default App;