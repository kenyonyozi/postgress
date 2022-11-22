import { DataSource } from "typeorm";
import { Student } from "./src/Entities/Student";
import { Transactions } from "./src/Entities/Transactions";

export const connectDB =  new DataSource({
    type: "postgres",
    host: "localhost",
    port : 5433 ,
    username: "postgres",
    password: "password",
    database: "postgres",
    entities:[Student , Transactions],
    synchronize:true,
    logging: true,
    subscribers: [],
    migrations: [],
   
})
connectDB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
})

