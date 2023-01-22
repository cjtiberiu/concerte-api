import { Router } from 'express';
import { getStates } from '../controllers/states';

export const states: Router = Router();

states.get('/getstates', getStates);
