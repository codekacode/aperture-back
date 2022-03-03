import express, { Application } from 'express';
import categoryRoutes from './categories/routes/categoryRoutes';
import productRoutes from './products/routes/productRoutes';
import userRoutes from './users/routes/userRoutes';

const app: Application = express();

app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);
app.use(categoryRoutes);

export default app;
