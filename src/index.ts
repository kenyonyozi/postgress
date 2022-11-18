import express  from "express";
import {connectDB} from '../data-source'
import { createUserRouter } from "./Routes/create_user";
import { deleteUserRouter } from "./Routes/delete_user";
import { updateUserRouter } from "./Routes/update_user";

//create express app
const app = express()

//middleware
app.use(express.json());
app.use(createUserRouter);
app.use(deleteUserRouter);
app.use(updateUserRouter);

connectDB
app.listen(8080,()=> {
    console.log('app is listening')
})