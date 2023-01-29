import { Router } from 'express';
import { authToken } from '../middleware/tokenCheck';
import { getEvents, getEvent, addEvent } from '../controllers/events';
import { adminCheck } from '../middleware/adminCheck';

export const events: Router = Router();

events.get('/getevents', getEvents);
events.get('/getevent', getEvent);
events.post('/addevent', authToken, adminCheck, addEvent);
