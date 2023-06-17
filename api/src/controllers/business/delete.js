const { Business } = require("../../models/Business");

const deleteBusiness = async id => {
    const deletedBusiness = await Business.findOneAndDelete({
        _id: id,
    });

    if (!deletedBusiness) throw new Error("business not found");

    return deletedBusiness;
}

module.exports = {
    deleteBusiness,
}
