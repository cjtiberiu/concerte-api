import { Request, Response } from 'express';
const db = require('../models/');
const { Op } = require('sequelize');

interface IEventsFilterObj {
    name?: any;
    eventArtist?: any;
    eventDate?: any;
    displayDate?: any;
    ID_UTILIZATOR?: any;
    month?: any;
    year?: any;
}

interface IOrderFilterObj {
    userID?: any;
}

export const addOrder = async (req: Request, res: Response) => {
    const { quantity, user, event } = req.body;
    const t = await db.sequelize.transaction();

    if (event.currentStock < quantity) {
        return res.json({ orderStatus: 'ERROR', message: 'Nu exista suficiente bilete disponibile!' });
    }

    if (quantity <= 0) {
        return res.json({ orderStatus: 'ERROR', message: 'Trebuie sa alegi o cantitate valida!' });
    }

    try {
        const order = await db.orders.create(
            {
                quantity,
                totalAmount: quantity * event.ticketPrice,
                userID: user.id,
                eventID: event.id,
            },
            { transaction: t }
        );

        for (let i = 0; i < quantity; i++) {
            await db.tickets.create(
                {
                    name: user.firstName + ' ' + user.lastName,
                    price: event.ticketPrice,
                    orderID: order.id,
                },
                { transaction: t }
            );
        }

        const dbEvent = await db.events.findByPk(event.id, { trasaction: t });
        dbEvent.decrement('STOC_CURENT', { by: quantity });
        dbEvent.save({ transaction: t });

        await t.commit();

        res.json({ order: order, message: 'Comanda adaugata cu succes!', orderStatus: 'SUCCESS' });
    } catch (err) {
        console.log(err);
        await t.rollback();
        return res.json({ message: err.name, orderStatus: 'ERROR' });
    }
};

export const getOrdersData = async (req: Request, res: Response) => {
    const { name, artist, startDate, endDate, userID } = req.query;
    const orderFilters: IOrderFilterObj = {};
    const eventFilters: IEventsFilterObj = {};

    if (name) {
        eventFilters.name = { [Op.like]: `%${name}%` };
    }

    if (userID && userID != '0') {
        orderFilters.userID = userID;
    }

    if (artist && Number(artist) > 0) {
        eventFilters.eventArtist = artist;
    }

    if ((startDate && startDate != 'null') || (endDate && endDate != 'null')) {
        eventFilters.eventDate = {
            [Op.and]: [],
        };
    }

    if (startDate && startDate != 'null') {
        eventFilters.eventDate[Op.and].push({ [Op.gt]: startDate });
    }

    if (endDate && endDate != 'null') {
        eventFilters.eventDate[Op.and].push({ [Op.lt]: endDate });
    }

    try {
        const orders = await db.orders.findAll({
            where: orderFilters,
            attributes: {
                include: [
                    [db.sequelize.literal(`DATE_FORMAT(order.CREATED_AT, '%d-%m-%Y')`), 'displayDate'],
                    //[db.sequelize.literal(`DATE_FORMAT(order.event.DATA_EVENIMENTULUI, '%d-%m-%Y')`), 'displayDate'],
                ],
            },
            include: [
                {
                    model: db.users,
                    attributes: {
                        exclude: ['password, createdAt'],
                    },
                },
                {
                    model: db.events,
                    where: eventFilters,
                    attributes: {
                        include: [[db.sequelize.literal(`DATE_FORMAT(event.DATA_EVENIMENTULUI, '%d-%m-%Y')`), 'displayDate']],
                        exclude: ['eventArtist', 'stateID', 'createdAt'],
                    },
                    include: [
                        {
                            model: db.artists,
                        },
                        {
                            model: db.states,
                        },
                    ],
                },
            ],
        });

        let totalTickets = orders.map((order: any) => order.quantity).reduce((a: number, b: number) => a + b, 0);
        let totalAmount = orders.map((order: any) => order.totalAmount).reduce((a: number, b: number) => a + b, 0);

        res.json({ orders, totalAmount: totalAmount, totalTickets: totalTickets });
    } catch (err) {
        console.log(err);
        return res.json({ message: err.name });
    }
};