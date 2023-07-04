const passport = require('passport');
const { Strategy } = require('passport-local');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../models/User');
const { Business } = require('../models/Business');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

passport.use("login", new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        const business = await Business.findOne({ email });
        if (!user && !business) {
            return done(null, false, { message: 'User not found' });
        }
        let isValidUserPassword;
        let isValidBusinessPassword;
        if (user) {
            isValidUserPassword = await user.isValidPassword(password);
        }
        if (business) {
            isValidBusinessPassword = await business.isValidPassword(password);
        }

        if (!isValidUserPassword && !isValidBusinessPassword) {
            return done(null, false, { message: "Wrong password" });
        }

        return done(null, user || business, { message: "Logged in successfully" });
    } catch (error) {
        console.log("ERROR PASSPORT: ", error);
        return done(error);
    }
}));

passport.use("jwt", new JwtStrategy(opts, async (payload, done) => {
    try {
        const user = await User.findById(payload.id);
        const business = await Business.findById(payload.id);

        if (!user && !business) {
            return done(null, false, { message: 'User not found' });
        }

        return done(null, user || business);
    } catch (error) {
        return done(error);
    }
}));

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser((user, done) => done(null, user));

module.exports = passport;
