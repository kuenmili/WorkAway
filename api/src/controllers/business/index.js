const {
    getAllBusiness,
    getBusinessByName,
    getBusinessByID,
} = require("./get");
const { createBusiness } = require("./post");
const { modifyBusinessPassword } = require("./put");
const { deleteBusiness } = require("./delete");

module.exports = {
    getAllBusiness,
    getBusinessByName,
    getBusinessByID,
    createBusiness,
    modifyBusinessPassword,
    deleteBusiness,
}
