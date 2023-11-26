import { pool } from "../libs/conection.js";

export const getHome = async (req, res) => {
    const {user_name} = req.user;
    res.status(200).json({
        message: `Hi ${user_name}`,
        state: "authenticated"
    });
}