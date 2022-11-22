import express  from "express";
import {connectDB} from './utils/data-source'
import { createStudentRouter } from "./Routes/create_student";
import { deleteStudentRouter } from "./Routes/delete_student";
import { updateStudentRouter } from "./Routes/update_student";
import { createTransactionRouter } from "./Routes/create_transaction";


//create express app
const app = express()

//middleware
app.use(express.json());
app.use(createStudentRouter);
app.use(deleteStudentRouter);
app.use(updateStudentRouter);
app.use(createTransactionRouter)

connectDB
app.listen(8080,()=> {
    console.log('app is listening')
})