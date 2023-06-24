const { Reserve } = require("../../models/Reserve");

const modifyReserve = async (id, date_from, date_to, occupants, coworkspace, user) => {
    const reserveModified = await Reserve.findByIdAndUpdate({
        _id: id,
    }, {
        date_from,
        date_to,
        occupants,
    });

    return reserveModified;
}

module.exports = {
    modifyReserve,
}
