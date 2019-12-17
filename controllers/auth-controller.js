const passport = require('passport');
const User = require('../models/User');

const showSignup = (req, res, next) => {
    res.render('signup');
}

const showLogin = (req, res, next) => {
    res.render('login');
}

const createUser = (req, res, next) => {
    User.create(req.body, (err, results, fields) => {
        if (err) return res.render('error', { err })

        res.redirect('/auth/login');
    })
}

module.exports = { showLogin, showSignup, createUser };