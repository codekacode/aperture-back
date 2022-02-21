import app from "./app";
import dotenv from 'dotenv';
import { createDbConnection } from "./config/databaseConfig";

dotenv.config();

createDbConnection(`${process.env.MONGO_URI}`)

app.listen(process.env.PORT)