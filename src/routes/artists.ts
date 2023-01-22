import { Router } from 'express';
import { getArtists } from '../controllers/artists';

export const artists: Router = Router();

artists.get('/getartists', getArtists);
