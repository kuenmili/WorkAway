const { Reserve } = require("../../models/Reserve");

const cretedReserve = async ({ date, duration, time_slot, room, user}) => {
    const reserveCreated = Reserve.create({
        date,
        duration,
        time_slot,
        room,
        user,
    });
    
    return reserveCreated;
}

module.exports = {
    cretedReserve,
}
