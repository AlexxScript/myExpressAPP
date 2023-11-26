import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv/config";
import homeRoute from "./routes/home.js";
import taskRoute from "./routes/task.js";
import userRoute from "./routes/user.js";
import cors from "cors";

const app = express();
app.use(cors({
    "origin": "http://localhost:5173",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/task", taskRoute);
app.use("/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`server running in ${process.env.PORT}`)
});