import { Request, Response } from 'express';
const db = require('../models/');

export const getEvents = async (req: Request, res: Response) => {
    try {
        const events = await db.events.findAll({
            //raw: true,
            attributes: {
                include: [
                    //[db.Sequelize.col('artist.name'), 'artist'],
                    //[db.Sequelize.col('state.name'), 'state'],
                ],
                exclude: ['eventArtist', 'stateID'],
            },
            include: [
                {
                    model: db.artists,
                    //attributes: [],
                },
                {
                    model: db.states,
                    //attributes: [],
                },
            ],
        });

        res.json({ events: events });
    } catch (err) {
        return res.json({ message: err.name });
    }
};

export const getEvent = async (req: Request, res: Response) => {
    const { eventID } = req.body;

    try {
        const event = await db.events.findOne({
            where: {
                id: eventID,
            },
        });

        res.json({ eventData: event, message: 'Event Found' });
    } catch (err) {
        return res.json({ message: err.name });
    }
};

// export const updateUser = async (req: Request, res: Response) => {
//     const { firstName, lastName, email, contractStartDate, contractEndDate, userType, userRole } = req.body;
//     let formattedStartDate;
//     let formattedEndDate;

//     // TODO: iso date formatting improvements

//     if (contractStartDate) {
//         formattedStartDate = new Date(contractStartDate);
//         formattedStartDate = formattedStartDate.toISOString().split('T')[0] + ' ' + formattedStartDate.toTimeString().split(' ')[0];
//     }

//     if (contractEndDate) {
//         formattedEndDate = new Date(contractEndDate);
//         formattedEndDate = formattedEndDate.toISOString().split('T')[0] + ' ' + formattedEndDate.toTimeString().split(' ')[0];
//     }

//     try {
//         const updatedUser = await db.users.update(
//             { firstName, lastName, email, contractStartDate, contractEndDate, userType, userRole },
//             {
//                 where: {
//                     email: email,
//                 },
//             }
//         );

//         return res.json({ updatedUser: updatedUser, message: 'User updated succesfully' });
//     } catch (err) {
//         return res.json({ message: err.name });
//     }
// };

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
