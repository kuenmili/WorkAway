const { Business } = require("../../models/Business");

const createBusiness = async ({name, cuit, email, password, address, cellphone_number}) => {
    const businessCreated = await Business.create({
        name,
        cuit,
        cellphone_number,
        email,
        password,
        address,
    });

    return businessCreated;
}

module.exports = {
    createBusiness,
}
