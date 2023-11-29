import { Link } from "react-router-dom";

interface SingleTask {
    id_task: number;
    description: string;
}

interface ListTasksProps {
    tasks: SingleTask[];
    deleteTask: (id: number) => void;
}

const ListTasks: React.FC<ListTasksProps> = ({tasks,deleteTask}) => {

    if (tasks.length === 0) {
        return (
            <div className="max-w-[80%] my-5 mx-auto">
                <h1>No tasks</h1>
            </div>
        )
    }

    return (
        <div className="w-[80%] mx-auto my-5">
            {
                tasks.map((task: SingleTask) => (
                    <div className="taskContainer flex my-2" key={task.id_task}>
                        <h3 className="[grid-area:description]">{task.description}</h3>
                        <div className="[grid-area:buttons] flex gap-4 justify-center items-center">
                            <Link className="bg-[#659bab] text-center py-4 w-[50%] rounded-md" to="/">Edit</Link>
                            <button onClick={() => deleteTask(task.id_task)} className="bg-red-400 w-[50%] py-4 rounded-md" type="submit">Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
    return <h1>fasdas</h1>
}

export default ListTasks;