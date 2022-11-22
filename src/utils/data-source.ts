import { DataSource } from "typeorm";
import { Student } from "../Entities/Student";
import { Transactions } from "../Entities/Transactions";

export const connectDB = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "password",
  database: "postgres",
  entities: [Student, Transactions],
  synchronize: false,
  logging: false,
  migrations: ["src/migrations/**/*{.ts,.js}"],
  subscribers: ["src/subscribers/**/*{.ts,.js}"],
});
connectDB
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });
