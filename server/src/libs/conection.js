import pkg from "pg";
import dotenv from 'dotenv/config'

const { Pool } = pkg;

export const pool = new Pool({
    user:process.env.USER_POSTGRES,
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    // port:5432
    port:process.env.PORT_POSTGRESQL
});
