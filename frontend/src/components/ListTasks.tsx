import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface SingleTask {
    id_task: number;
    description: String;
}

const ListTasks = () => {

    const [tasks, setTasks] = useState({
        message: "",
        tasks: [] as SingleTask[]
    })

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const res = await fetch("http://localhost:8080/task/read", {
                    credentials: "include"
                });
                const data = await res.json();
                setTasks({
                    message: data.message,
                    tasks: data.tasks
                })
            } catch (error) {
                console.log(error);
                return error
            }

        }
        loadTasks();
    }, [tasks])

    if (tasks.tasks.length === 0) {
        return (
            <div className="max-w-[80%] my-5 mx-auto">
                <h1>{tasks.message}</h1>
            </div>
        )
    }

    return (
        <div className="w-[80%] mx-auto my-5">
            {
                tasks.tasks.map((task: SingleTask) => (
                    <div className="taskContainer flex my-2" key={task.id_task}>
                        <h3 className="[grid-area:description]">{task.description}</h3>
                        <div className="[grid-area:buttons] flex gap-4 justify-center items-center">
                            <Link className="bg-[#659bab] text-center py-4 w-[50%] rounded-md" to="/">Edit</Link>
                            <button className="bg-red-400 w-[50%] py-4 rounded-md" type="submit">Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ListTasks;