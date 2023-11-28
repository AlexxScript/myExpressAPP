import FormCreateTask from "../components/FormCreateTask"
import ListTasks from "../components/ListTasks";

const ListTask = () => {
    return (
        <div className="[grid-area:form] flex flex-col my-4">
            <div className="w-full">
                <FormCreateTask />
                <ListTasks/>
            </div>
        </div>
    )
}

export default ListTask;
