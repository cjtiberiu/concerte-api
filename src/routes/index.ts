import { Router } from 'express';
import { auth } from './auth';
import { users } from './users';

export const routes: Router = Router();

routes.use(auth);
routes.use(users);