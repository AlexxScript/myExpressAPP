import { pool } from "../libs/conection.js";

export const getHome = async (req, res) => {
    const client = await pool.connect();
    const data = await client.query("SELECT * FROM tasks WHERE id_user=$1",[req.user.id_user]);
    if (data.rows[0] == null) {
        return res.status(404).json({message:"No tasks"});        
    }
    console.log(data)
    res.json({
        message: data
    });
}