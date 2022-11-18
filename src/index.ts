import { DataSource } from "typeorm";
import express  from "express";
import { User } from "./Entities/User";
import { createUserRouter } from "./Routes/create_user";
import { deleteUserRouter } from "./Routes/delete_user";

//create express app
const app = express()

//middle ware
app.use(express.json());
app.use(createUserRouter);
app.use(deleteUserRouter);

//connecting to data base
//cange this to dotenv
const connectDB =  new DataSource({
    type: "postgres",
    host: "localhost",
    port :  ,
    username: "",
    password: "",
    database: "",
    entities:[User],
    synchronize:true
   
})
connectDB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

    app.listen(8080,()=> {
        console.log('app is listening')
    })


export default connectDB;
