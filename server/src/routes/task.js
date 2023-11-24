import { Router } from 'express';
import { createTask, deleteTask, readTask, readTasks, editTask } from '../controllers/taskController.js';
import { authToken } from '../middlewares/authToken.js';

const router = Router();

router.get("/read",authToken,readTasks);
router.get("/read/:idTask",authToken,readTask);
router.post("/create",authToken,createTask);
router.put("/edit/:idTask",authToken,editTask);
router.delete("/delete/:idTask",authToken,deleteTask);

export default router;