const { Reserve } = require("../../models/Reserve");

const deleteReserve = async id => {
    const reserveDeleted = await Reserve.findByIdAndDelete({
        _id: id,
    });

    if (!reserveDeleted) throw new Error("reserve not found");
    
    return deleteReserve;
}

module.exports = {
    deleteReserve,
}
