import React, { useState } from "react";

interface PropsCreateTask {
    createTask: (description:any) => void
}

const FormCreateTask:React.FC<PropsCreateTask> = ({createTask}) => {

    const [description,setDescription] = useState({
        description:""
    });

    const handleTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription({
            description:e.target.value
        });
        console.log(description.description);
    }

    const handleSubmit = async (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTask(description)
    }

    return (
        <form onSubmit={handleSubmit} className="formCreate flex max-w-[80%] mx-auto gap-3">
        
            <div className="[grid-area:input] w-[100%]">
                <label htmlFor="description">Description task</label>
                <textarea className="w-full border-b-4 border-b-[var(--color-input)]" name="description" onChange={handleTextArea} value={description.description}/>
            </div>

            <div className="[grid-area:button] w-[100%] bg-green-500 flex justify-center items-center rounded-[12px]">
                <button className="taskCreate w-[100%]" type="submit">Create</button>
            </div>
        
        </form>
    )
}

export default FormCreateTask;