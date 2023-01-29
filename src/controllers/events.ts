import { Request, Response } from 'express';
const db = require('../models/');
const { Op } = require('sequelize');

interface IEventsFilterObj {
    name?: any;
    eventArtist?: any;
    eventDate?: any;
    displayDate?: any;
    month?: any;
    year?: any;
}

export const getEvents = async (req: Request, res: Response) => {
    const { name, artist, startDate, endDate } = req.query;
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
            order: [['DATA_EVENIMENTULUI', 'ASC']],
            attributes: {
                include: [[db.sequelize.literal(`DATE_FORMAT(DATA_EVENIMENTULUI, '%d-%m-%Y')`), 'displayDate']],
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
        console.log(err);
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

export const addEvent = async (req: Request, res: Response) => {
    const { name, eventDate, ticketPrice, stock, artistID, stateID } = req.body;

    try {
        const event = db.events.create({
            name,
            eventDate,
            ticketPrice,
            initialStock: stock,
            currentStock: stock,
            eventArtist: artistID,
            stateID,
            displayImage: 'concert' + getRandomArbitrary(1, 5) + '.jpg'
        });

        return res.json({ event: event, message: 'Event added succesfully!', success: true, resultStatus: 'SUCCESS' });
    } catch (err) {
        console.log(err);
        return res.json({ message: err.name, resultStatus: 'ERROR' });
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

const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}
