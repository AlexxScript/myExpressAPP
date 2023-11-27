import { useContext, useEffect, useState } from "react";
import AuthenticatedContext from "./context/AuthContext";

const App = () => {

    const contextAuth = useContext(AuthenticatedContext);
    
    // useEffect(()=>{
    //     const loadData = async () => {
    //         try {
    //             const res = await fetch("http://localhost:8080/",{
    //                 credentials:"include"
    //             });
    //             const data = await res.json();
    //             setRequestInfo({
    //                 state: data.state,
    //                 message: data.message
    //             })
    //             console.log(requestInfo.state);
    //             return data    
    //         } catch (error:any) {
    //             console.log(error)
    //             setRequestInfo(error)
    //         }
    //     }
    //     loadData()
    // },[])
    
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