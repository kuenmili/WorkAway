const passport = require("passport");
const { generateUserToken, generateBusinessToken, isAdmin } = require('../middlewares/auth');
const router = require("express").Router();

router.post("/login", passport.authenticate("login", { session: false }), async (req, res, next) => {
    try {
        const isAdminUser = await isAdmin(req.user);
        if (isAdminUser) {
            const token = generateBusinessToken(req.user);
            return res.status(200).json({ success: true, token, isAdmin: true });
        }

        const token = generateUserToken(req.user);
        res.status(200).json({ success: true, token, isAdmin: false });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

router.post("/logout", (req, res, next) => {
    req.logout(err => {
        if (err) {
            console.log("ERROR", err)
            return res.status(400).json({ success: false, error: err.message });
        }

        res.status(200).json({ success: true });
    });
});

router.get('/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));


router.get( '/google/callback', (req, res, next) => {
    passport.authenticate( 'google', (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err.message });
        }
    
        const token = generateUserToken(user);
        res.redirect(`https://workaway.vercel.app/home?token=${token}`);
      })(req, res, next);
});


module.exports = router;
