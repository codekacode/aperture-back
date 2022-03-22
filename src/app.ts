import express, { Application } from 'express';
import categoryRoutes from './categories/routes/categoryRoutes';
import productRoutes from './products/routes/productRoutes';
import userRoutes from './users/routes/userRoutes';
import authRoutes from './auth/router/authRouter';
import purchaseOrderRoutes from './purchaseOrder/routes/purchaseOrderRoutes';
import cartRoutes from './cart/routes/cartRouter';

const app: Application = express();


app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use(authRoutes);
app.use(purchaseOrderRoutes);
app.use(cartRoutes);
app.use(purchaseOrderRoutes);


export default app;
