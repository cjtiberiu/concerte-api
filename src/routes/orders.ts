import { Router } from 'express';
import { authToken } from '../middleware/tokenCheck';
import { adminCheck } from '../middleware/adminCheck';
import { addOrder, getOrdersData } from '../controllers/orders';

export const orders: Router = Router();

orders.post('/addorder', authToken, addOrder);
orders.get('/getordersdata', authToken, getOrdersData);
