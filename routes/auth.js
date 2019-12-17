const express = require('express');
const router = express.Router();
const { showSignup, showLogin, createUser } = require('../controllers/auth-controller');

/* GET home page. */
router.get('/signup', showSignup);

router.get('/login', showLogin);

router.post('/signup', createUser);

module.exports = router;
