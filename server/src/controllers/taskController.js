export const readTasks = (req,res) => {
    res.json("All tasks");
};

export const readTask = (req,res) => {
    const { idTask } = req.params;
    res.json(`idTask: ${idTask}`);
};

export const createTask = (req,res) => {
    res.json("createTask");
};

export const updateTask = (req,res) => {
    const { idTask } = req.params;
    res.json(`idTaskToUpdate: ${idTask}`);
};

export const deleteTask = (req,res) => {
    const { idTask } = req.params;
    res.json(`idTaskToDelete: ${idTask}`);
};