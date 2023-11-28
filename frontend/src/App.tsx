import { useContext } from "react";
import AuthenticatedContext from "./context/AuthContext";

const App = () => {

    const contextAuth = useContext(AuthenticatedContext);
    console.log(contextAuth.user);
    if (contextAuth.user.state === "unauthenticated") {
        return(
            <h1>{contextAuth.user.message}</h1>
        )           
    }else{
        return(
            <>
                <h1>{contextAuth.user.message}</h1>
            </>
        )
    }
}

export default App;