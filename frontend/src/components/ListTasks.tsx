import { useEffect } from "react";

const ListTasks = () => {

    useEffect(()=>{
        const loadTasks = async () => {
            try {
                const res = await fetch("http://localhost:8080/task/read",{
                    credentials:"include"
                });
                const data = await res.json();
                console.log(data);
                return data;    
            } catch (error) {
                console.log(error);
            }
            
        }
        const data = loadTasks();
        console.log(data);
    },[])

    return (
        <div className="w-[80%] mx-auto my-5">
            <h1>task</h1>
        </div>
    );
}

export default ListTasks;