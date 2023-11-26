import { useEffect, useState } from "react";

const App = () => {
    const [requestInfo,setRequestInfo] = useState({
        state:"",
        message:""
    });
    
    useEffect(()=>{
        const loadData = async () => {
            try {
                const res = await fetch("http://localhost:8080/",{
                    credentials:"include"
                });
                const data = await res.json();
                setRequestInfo({
                    state: data.state,
                    message: data.message
                })
                console.log(requestInfo.state);
                return data    
            } catch (error:any) {
                console.log(error)
                setRequestInfo(error)
            }
        }
        loadData()
    },[])
    
    if (requestInfo.state === "unauthenticated") {
        return(
            <h1>{requestInfo.message}</h1>
        )           
    }else{
        return(
            <>
                <h1>Autenticado</h1>
            </>
        )
    }
}

export default App;