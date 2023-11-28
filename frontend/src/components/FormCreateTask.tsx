import React, { useState } from "react";

const FormCreateTask = () => {

    const [description,setDescription] = useState({
        description:""
    });

    const handleTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription({
            description:e.target.value
        });
    }

    const handleSubmit = async (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                setDescription({
                    description:""
                })
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
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