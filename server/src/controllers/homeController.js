import { pool } from "../libs/conection.js";

export const getHome = (req, res) => {
    pool.connect();
    pool.query("SELECT * FROM users")
        .then(res => {
            console.log(res.rows)
            pool.end()
        })
        .catch(err => {
            console.log(err)
            pool.end()

        })
    res.json({
        message: "server is running"
    });
}