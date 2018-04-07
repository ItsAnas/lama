'use strict'

import bodyParser from 'body-parser'
import express  from 'express'
import session from 'express-session'
import path from 'path'

import { application as config } from './config/config.js'
import { jwt as secret } from './config/secret.js'
import connection from './server/database'
import router from './server/routes'

const app = express()

connection
    .then(() => {

        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json({ limit: '5mb' }))

        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
            next()
        })

        app.use('/files', express.static(path.join(__dirname, '../files')))

        app.use('/', router)
        app.listen(config.port)

        console.log(`Server running on port ${config.port}`)
    })
    .catch((err) => {
        console.error(err)
    })

