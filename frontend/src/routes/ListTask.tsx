import { useEffect, useState } from "react";
import FormCreateTask from "../components/FormCreateTask";
import ListTasks from "../components/ListTasks";

interface SingleTask {
    id_task: number;
    description: string;
}

const ListTask = () => {
    const [tasks, setTasks] = useState<SingleTask[]>([]);
    const [message,setMessage] = useState<string>("");

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const res = await fetch("http://localhost:8080/task/read", {
                credentials: "include"
            });
            const data = await res.json();
            if (data.tasks) {
                setTasks(data.tasks);
                setMessage(data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    const createTask = async (description:any) => {
        console.log("function working");
        try {
            const res = await fetch("http://localhost:8080/task/create",{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(description)
            });
            const data = await res.json();
            if (data.message === "Task created") {
                setTasks([])
                loadTasks();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async (id: number) => {
        const res = await fetch(`http://localhost:8080/task/delete/${id}`, {
            method: "DELETE",
            credentials: "include"
        });
        const data = await res.json();
        setMessage(data.message);
        loadTasks();
    };

    return (
        <div className="[grid-area:form] flex flex-col my-4">
            <div className="w-full">
                <FormCreateTask createTask={createTask}/>
                <ListTasks tasks={tasks} deleteTask={deleteTask} message={message}/>
            </div>
        </div>
    );
};

export default ListTask;
