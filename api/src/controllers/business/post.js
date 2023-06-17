const { Business } = require("../../models/Business");

const createBusiness = async ({name, cuit, email, password, address}) => {
    const businessCreated = await Business.create({
        name,
        cuit,
        email,
        password,
        address,
    });

    return businessCreated;
}

module.exports = {
    createBusiness,
}
