const { Reserve } = require("../../models/Reserve");

const getAllReserves = async () => {
    const allReserves = await Reserve.find()


    return allReserves;
}

const getAllReservesByUserID = async userID => {
    
}

const getReservesByDate = async (date_from, date_to, userID) => {
    const reserveByDate = await Reserve.find({
        user: userID,
        date: {
            $gte: date_from,
            $lte: date_to,
        },
    });


    return reserveByDate;
}

const getReserveByID = async (id) => {
    const reserveById = await Reserve.findById(id)


    if (!reserveById) throw new Error("Reserve not found");

    return reserveById;
}

module.exports = {
    getAllReserves,
    getReservesByDate,
    getReserveByID,
}
