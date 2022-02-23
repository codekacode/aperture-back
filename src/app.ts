import express, { Application } from 'express';
import categoryRoutes from './categories/routes/categoryRoutes';
import productRoutes from './products/routes/productRoutes';

const app: Application = express();

app.use(express.json());

app.use(productRoutes);
app.use(categoryRoutes);

export default app;
