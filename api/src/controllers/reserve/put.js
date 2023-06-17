const { Reserve } = require("../../models/Reserve");

const modifyReserve = async (id, date, duration, time_slot, room, user) => {
    const reserveModified = await Reserve.findByIdAndUpdate({
        id: id,
    }, {
        date,
        duration,
        time_slot,
        room,
        user,
    });

    return reserveModified;
}

module.exports = {
    modifyReserve,
}
