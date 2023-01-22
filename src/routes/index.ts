import { Router } from 'express';
import { auth } from './auth';
import { users } from './users';
import { events } from './events';
import { orders } from './orders';
import { artists } from './artists';
import { states } from './states';

export const routes: Router = Router();

routes.use(auth);
routes.use(users);
routes.use(events);
routes.use(orders);
routes.use(artists);
routes.use(states);