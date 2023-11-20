import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv/config";
import homeRoute from "./routes/home.js";
import taskRoute from "./routes/task.js";
import userRoute from "./routes/user.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", homeRoute);
app.use("/task", taskRoute);
app.use("/user", userRoute);

app.listen(process.env.PORT,()=>{
    console.log(`server running in ${process.env.PORT}`)
});