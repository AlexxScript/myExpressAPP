const FormCreateTask = () => {
    return (
        <form className="formCreate flex max-w-[80%] mx-auto gap-3">
        
            <div className="[grid-area:input] w-[100%]">
                <label htmlFor="description">Description task</label>
                <textarea className="w-full border-b-4 border-b-[var(--color-input)]" name="description" />
            </div>

            <div className=
                "[grid-area:button] w-[100%] bg-green-500 flex justify-center items-center rounded-[12px]"
            >
                <button className="taskCreate w-[100%] h-[100%]" type="submit">Create</button>
            </div>
        
        </form>
    )
}

export default FormCreateTask;