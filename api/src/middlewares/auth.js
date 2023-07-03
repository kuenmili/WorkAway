const jwt = require('jsonwebtoken');
const { Business } = require('../models/Business');

const generateUserToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        cellphone_number: user.cellphone_number,
        profile_image: user.profile_image,
        reserve_id: user.reserve_id,
        reviews: user.reviews
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const generateBusinessToken = (business) => {
    const payload = {
        id: business.id,
        name: business.name,
        cuit: business.cuit,
        cellphone_number: business.cellphone_number,
        email: business.email,
        address: business.address,
        cowork_spaces: business.cowork_spaces
    };

    return jwt.sign(payload, process.env.JWT_SECRET , { expiresIn: '1d' });
};

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    res.status(401).json({ message: 'You are not authenticated' });
};

const isAdmin = (user) => {
    const business = Business.findById(user._id);
    if (business) {
        return true;
    }

    return false;
};

const isAdminMiddleware = (req, res, next) => {
    const user = req.user;
    if (isAdmin(user)) {
        return next();
    }

    res.status(403).json({ message: 'You are not authorized' });
};

module.exports = {
    generateBusinessToken,
    generateUserToken,
    isAuthenticated,
    isAdminMiddleware,
    isAdmin,
};
