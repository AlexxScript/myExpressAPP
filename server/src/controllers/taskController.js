import { pool } from "../libs/conection.js";

export const readTasks = async (req, res) => {
    const { id_user } = req.user;
    const client = await pool.connect();
    const parameter = [id_user];
    const query = "SELECT * FROM tasks WHERE id_user = $1";

    try {
        const tasks = await client.query(query, parameter);
        if (tasks.rows.length === 0) return res.status(404).json({ message: "Tasks not found" });
        res.json(tasks.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    } finally {
        client.release();
    }
};

export const readTask = async (req, res) => {
    const { id_user } = req.user;
    const { idTask } = req.params;
    const client = await pool.connect();
    const query = "SELECT * FROM tasks WHERE id_task = $1 AND id_user = $2";
    const parameter = [idTask,id_user];

    try {
        const task = await client.query(query,parameter);
        if (task.rows.length <= 0) {
            return res.status(400).json({message:"Task does not exist"});
        }
        console.log(task.rows[0]);
        res.json(task.rows[0])
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    } finally {
        client.release()
    }
};

export const createTask = async (req, res) => {
    const { id_user } = req.user;
    const { description } = req.body;
    const parameter = [id_user, description];
    const query = "INSERT INTO tasks (id_user,description) VALUES ($1,$2)";
    const client = await pool.connect();

    try {
        if (!description) return res.status(400).json({ message: "Must send a description" });
        const insertion = await client.query(query, parameter);
        console.log(insertion);
        res.json({ message: "Task created", insertion });
    } catch (error) {
        res.json(error)
    } finally {    
        client.release();
    }
};

export const updateTask = (req, res) => {
    const { idTask } = req.params;
    res.json(`idTaskToUpdate: ${idTask}`);
};

export const deleteTask = (req, res) => {
    const { idTask } = req.params;
    res.json(`idTaskToDelete: ${idTask}`);
};