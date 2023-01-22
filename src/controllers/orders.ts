import { Request, Response } from 'express';
const db = require('../models/');

export const addOrder = async (req: Request, res: Response) => {
    const { quantity, user, event } = req.body;
    const t = await db.sequelize.transaction();

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
        dbEvent.decrement('STOC', { by: quantity });
        dbEvent.save({ transaction: t });

        await t.commit();

        res.json({ order: order, message: 'Order succesfully added!', orderStatus: 'SUCCESS' });
    } catch (err) {
        console.log(err);
        await t.rollback();
        return res.json({ message: err.name, orderStatus: 'ERROR' });
    }
};
