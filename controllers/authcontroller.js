var exports = module.exports = {}


exports.signup = function(req, res) {

    res.render('index');

}

exports.signin = function(req, res) {

    res.render('signin');

}

exports.dashboard = function(req, res) {

    res.render('/schedule');

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });
}