import { Request, Response } from 'express';
const db = require('../models/');
const { Op } = require('sequelize');

interface IEventsFilterObj {
    name?: any;
    eventArtist?: any;
    eventDate?: any;
    month?: any;
    year?: any;
}

export const getEvents = async (req: Request, res: Response) => {
    const { name, artist, month, year, startDate, endDate } = req.query;
    const filter: IEventsFilterObj = {};

    if (name) {
        filter.name = { [Op.like]: `%${name}%` };
    }

    if (artist && Number(artist) > 0) {
        filter.eventArtist = artist;
    }

    if ((startDate && startDate != 'null') || (endDate && endDate != 'null')) {
        filter.eventDate = {
            [Op.and]: [],
        };
    }

    if (startDate && startDate != 'null') {
        filter.eventDate[Op.and].push({ [Op.gt]: startDate });
    }

    if (endDate && endDate != 'null') {
        filter.eventDate[Op.and].push({ [Op.lt]: endDate });
    }

    try {
        const events = await db.events.findAll({
            where: filter,
            attributes: {
                exclude: ['eventArtist', 'stateID'],
            },
            include: [
                {
                    model: db.artists,
                },
                {
                    model: db.states,
                },
            ],
        });

        res.json({ events: events });
    } catch (err) {
        return res.json({ message: err.name });
    }
};

export const getEvent = async (req: Request, res: Response) => {
    const { eventID } = req.query;

    try {
        const event = await db.events.findOne({
            where: {
                id: eventID,
            },
            attributes: {
                exclude: ['eventArtist', 'stateID'],
            },
            include: [
                {
                    model: db.artists,
                },
                {
                    model: db.states,
                },
            ],
        });

        res.json({ eventData: event, message: 'Event Found' });
    } catch (err) {
        return res.json({ message: err.name });
    }
};

export const removeEvent = async (req: Request, res: Response) => {
    const { eventID } = req.body;

    try {
        const users = await db.events.destroy({
            where: {
                id: eventID,
            },
        });

        res.json({ message: 'User deleted succesfully' });
    } catch (err) {
        return res.json({ message: err.name });
    }
};
