const { Business } = require("../../models/Business");

const modifyBusinessPassword = async (id, actualPassword, newPassword) => {
    const modifiedBusiness = await Business.findOneAndUpdate({
        _id: id,
        password: actualPassword,
    }, {
        password: newPassword,
    });

    return modifiedBusiness;
}

module.exports = {
    modifyBusinessPassword,
}
