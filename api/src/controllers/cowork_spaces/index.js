const {
    getAllCoworkSpaces,
    getCoworkSpacesBySearch,
    getCoworkSpaceByID,
    getCoworkSpaceWithReserve,
} = require("./get");
const { createSpaceCowork } = require('./post');
const { modifyCoworkSpace, modifyCoworkSpacePrice } = require('./put');
const { deleteCoworkSpace } = require('./delete');

module.exports = {
    getAllCoworkSpaces,
    getCoworkSpacesBySearch,
    getCoworkSpaceByID,
    getCoworkSpaceWithReserve,
    createSpaceCowork,
    modifyCoworkSpace,
    deleteCoworkSpace,
    modifyCoworkSpacePrice,
}
