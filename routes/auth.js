const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication')
const testUser = require('../middleware/testUser')
const { register, login, updateUser } = require('../controllers/auth')

const rateLimiter = require('express-rate-limit');

// const appLimiter = rateLimiter({
//     windowMs: 15 * 60 * 1000,
//     max: 1,
//     message: {
//         msg: 'Too many requests from this IP, please try again later in 15 minutes.'
//     },

// })

router.post('/register', register)
router.post('/login', login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

module.exports = router
