const {
    getAllCoworkSpaces,
    getCoworkSpacesBySearch,
    getCoworkSpaceByID,
} = require("./get");
const { createSpaceCowork } = require('./post');
const { modifyCoworkSpace } = require('./put');
const { deleteCoworkSpace } = require('./delete');

module.exports = {
    getAllCoworkSpaces,
    getCoworkSpacesBySearch,
    getCoworkSpaceByID,
    createSpaceCowork,
    modifyCoworkSpace,
    deleteCoworkSpace,
}
