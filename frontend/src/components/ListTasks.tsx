import { useEffect, useState } from "react";

interface SingleTask {
    id_task:number;
    description:String;
}

const ListTasks = () => {

    const [tasks,setTasks] = useState({
        message:"",
        tasks: [] as SingleTask[]
    })

    useEffect(()=>{
        const loadTasks = async () => {
            try {
                const res = await fetch("http://localhost:8080/task/read",{
                    credentials:"include"
                });
                const data = await res.json();
                setTasks({
                    message:data.message,
                    tasks:data.tasks
                })
            } catch (error) {
                console.log(error);
                return error
            }
            
        }
        loadTasks();
    },[])

    if(tasks.tasks.length === 0) {
        return <h1>No tasks</h1>
    }

    return (
        <div className="w-[80%] mx-auto my-5">
            {
                tasks.tasks.map((task:SingleTask) => (
                    <h1 key={task.id_task}>{task.description}</h1>
                ))
            }
        </div>
    );
}

export default ListTasks;