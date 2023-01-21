import { Router } from 'express';
import { authToken } from '../middleware/tokenCheck';
import { getEvents } from '../controllers/events';
import { adminCheck } from '../middleware/adminCheck';

export const events: Router = Router();

events.get('/getevents', getEvents);
