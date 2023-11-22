import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../libs/conection.js";

export const createUser = async (req, res) => {
    const client = await pool.connect()

    try {
        const saltRounds = 10;
        const { user_email, user_name, password, confirmPassword } = req.body;

        if (password !== confirmPassword) return res.status(401).json("password does not match");

        const emailCheck = await client.query('SELECT * FROM users WHERE user_email = $1', [user_email]);
        if (emailCheck.rows.length > 0) return res.status(401).json("Email exist");


        const userCheck = await client.query('SELECT * FROM users WHERE user_name = $1', [user_name]);
        if (userCheck.rows.length > 0) return res.status(401).json("user_name exist");


        const passCrypt = await bcrypt.hash(password, saltRounds);

        const insertion = await client.query('INSERT INTO users (user_email,user_name,password) VALUES($1,$2,$3)', [user_email, user_name, passCrypt]);

        res.json({ message: "user created", insertion });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error", message: error.message });
    } finally {
        client.release();
    }

};

export const logIn = async (req, res) => {
    const { user_email, password } = req.body;
    const client = await pool.connect();
    try {
        const text = "SELECT * FROM users WHERE user_email = $1";
        const parameter = [user_email];
        const queryResult = await client.query(text, parameter);

        if (queryResult.rows.length < 0) res.status(401).json({ message: "wrong email credential" });

        const checkPassword = await bcrypt.compare(password, queryResult.rows[0].password);

        if (!checkPassword) res.status(401).json({ message: "wrong password" });

        const token = jwt.sign(
            {
                id_user:queryResult.rows[0].id_user,
                user_name:queryResult.rows[0].user_name
            },
            process.env.JWT_SECRET
        )
        res.cookie("token",token);
        res.json({ message:"succes",token });
    } catch (error) {
        console.log(error);
    } finally {
        client.release();
    }


}

export const logOut = (req, res) => {
    res.cookie("token","");
    return res.sendStatus(200);
}