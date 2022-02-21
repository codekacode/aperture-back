import express, { Application } from 'express';
import { createDbConnection } from './config/databaseConfig';
import productRoutes from './products/routes/productRoutes';

const app: Application = express();

app.use(express.json())

app.use(productRoutes)


export default app;