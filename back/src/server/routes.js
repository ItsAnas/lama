'use strict'

import express from 'express'

import * as AuthController from '../api/controllers/AuthController'

const router = express.Router()

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, x-session-token')
    res.header('Access-Control-Allow-Methods', 'POST, GET')
    res.header('Content-Type', 'application/json')

    if (req.method === 'OPTIONS') {
        return res.status(200).send({})
    } else {
        next()
    }
})

/**
 * Public routes
 */

router.post('/api/user/signin', AuthController.signin)
router.post('/api/user/signup', AuthController.signup)

router.use((req, res) => {
    return (res.sendStatus(404))
})

export default router