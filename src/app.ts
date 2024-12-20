import express, { Application, Request, Response } from "express";
import cors from 'cors';
import { productRouter } from "./app/modules/products/product.router";
import { orderRouter } from "./app/modules/orders/orders.router";


const app: Application = express();

app.use(express.json())
app.use(cors())

app.use('/api',productRouter);
app.use("/api", orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API is running successfully!' });
});

export default app;