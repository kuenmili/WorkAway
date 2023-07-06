const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { User } = require('../models/User');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://work-away-back.vercel.app/auth/google/callback",
  passReqToCallback: true,
},
async function(request, accessToken, refreshToken, profile, done) {
  try {
    const user = await User.findOne({ email: profile.email });
    if (user) {
        return done(null, user);
    }

    const [firstName, lastName] = profile.displayName.split(" ");

    const newUser = await User.create({
        first_name: firstName,
        last_name: lastName,
        email: profile.email,
        profile_image: profile.picture,
        cellphone_number: profile.phone_number || "0000000000",
    });

    return done(null, newUser);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return done(err, user);
    // });
  } catch (error) {
    console.log("ERROR GOOGLE STRATEGY", error)
    return done(error, null);
  }
}))

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
