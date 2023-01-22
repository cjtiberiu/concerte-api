import { Request, Response } from 'express';
const db = require('../models/');

export const getArtists = async (req: Request, res: Response) => {
    try {
        const artists = await db.artists.findAll();

        res.json({ artists: artists });
    } catch (err) {
        return res.json({ message: err.name });
    }
};
