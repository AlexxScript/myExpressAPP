import { pool } from "../libs/conection.js";

export const getHome = async (req, res) => {
    const client = await pool.connect();
    client.query("SELECT * FROM users")
        .then(res => {
            console.log(res.rows)
            client.release()
        })
        .catch(err => {
            console.log(err)
            client.release()

        });
    res.json({
        message: "server is running"
    });
}