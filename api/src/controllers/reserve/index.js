const {
    getAllReserves,
    getReservesByDate,
    getReserveByID,
} = require("./get");
const { cretedReserve } = require("./post");
const { modifyReserve } = require("./put");
const { deleteReserve } = require("./delete");

module.exports = {
    getAllReserves,
    getReservesByDate,
    getReserveByID,
    cretedReserve,
    modifyReserve,
    deleteReserve,
}
