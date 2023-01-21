import { Router } from 'express';
import { auth } from './auth';
import { users } from './users';
import { events } from './events';

export const routes: Router = Router();

routes.use(auth);
routes.use(users);
routes.use(events);