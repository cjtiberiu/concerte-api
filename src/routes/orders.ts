import { Router } from 'express';
import { authToken } from '../middleware/tokenCheck';
import { addOrder } from '../controllers/orders';

export const orders: Router = Router();

orders.post('/addorder', authToken, addOrder);
