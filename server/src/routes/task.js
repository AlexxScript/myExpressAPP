import { Router } from 'express';
import { createTask, deleteTask, readTask, readTasks, updateTask } from '../controllers/taskController.js';

const router = Router();

router.get("/read",readTasks);
router.get("/read/:idTask",readTask);
router.post("/create",createTask);
router.put("/update/:idTask",updateTask);
router.delete("/delete/:idTask",deleteTask);

export default router;