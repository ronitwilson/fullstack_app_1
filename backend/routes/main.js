const express = require('express')
const register = require('../controllers/register')
const registerPolicy = require('../policies/register-policy')
const router = express.Router()


router.route('/register').post(registerPolicy.check_validity,register)
// router.route('/login').post(login)

module.exports = router