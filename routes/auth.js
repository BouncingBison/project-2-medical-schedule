var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/', authController.signup);


    app.get('/', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/schedule',
        failureRedirect: '/'
    }));


    app.get('/schedule', isLoggedIn, authController.dashboard);


    app.get('/logout', authController.logout);


    app.post('/', passport.authenticate('local-signin', {
        successRedirect: '/schedule',
        failureRedirect: '/'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/schedule');
    }


}