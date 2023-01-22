import { Request, Response } from 'express';
const db = require('../models/');

export const getStates = async (req: Request, res: Response) => {
    try {
        const states = await db.states.findAll();

        res.json({ states: states });
    } catch (err) {
        return res.json({ message: err.name });
    }
};
