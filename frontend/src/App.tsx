import { useEffect } from "react";

const App = () => {
    
    useEffect(()=>{

        const loadData = async () => {
            try {
                const res = await fetch("http://localhost:8080/");
                const data = await res.json();
                return data    
            } catch (error) {
                console.log(error)
            }
        }
        console.log(loadData());

    },[])
    
    return(
        <>
            <h1>Hola</h1>
        </>
    )
}

export default App;