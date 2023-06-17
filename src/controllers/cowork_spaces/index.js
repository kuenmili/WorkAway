const {
    getAllCoworkSpaces,
    getCoworkSpacesByName,
    getCoworkSpaceByID,
} = require("./get");
const { createSpaceCowork } = require('./post');
const { modifyCoworkSpace } = require('./put');
const { deleteCoworkSpace } = require('./delete');

module.exports = {
    getAllCoworkSpaces,
    getCoworkSpacesByName,
    getCoworkSpaceByID,
    createSpaceCowork,
    modifyCoworkSpace,
    deleteCoworkSpace,
}
