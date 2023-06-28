const { Business } = require("../../models/Business");

const getAllBusiness = async () => {
    const allBusiness = await Business.find()
        .populate("cowork_spaces");
    
    return allBusiness;
}

const getBusinessByName = async name => {
    const businessByName = await Business.findOne({
        name
    }).populate("cowork_spaces");

    return businessByName;
}

const getBusinessByID = async id => {
    const businessByID = await Business.findById(id)
        .populate("cowork_spaces");

    if (!businessByID) throw new Error("business not found");

    return businessByID;
}

module.exports = {
    getAllBusiness,
    getBusinessByName,
    getBusinessByID,
}
