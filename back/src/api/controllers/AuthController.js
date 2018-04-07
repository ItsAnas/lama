'use strict'

import User from '../models/UserModel'

import * as PasswordService from '../services/PasswordService'
import * as JwtService from '../services/JwtService'
import * as ResponseService from '../services/ResponseService'

import error from '../../templates/error'

export const signin = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await User.findOne({ email })
        if (!user) {
            error.message = 'Wrong email'
            error.type = 'unique'
            return res.status(202).send(ResponseService.createErrorResponse([ error ]))
        }
        else {
            const hashedPassword = await PasswordService.hashPassword(password, user.salt)

            if (hashedPassword !== user.password) {
                error.message = 'Wrong password'
                error.type = 'unique'
                return res.status(202).send(ResponseService.createErrorResponse([ error ]))
            }
            else {
                const token = JwtService.tokenSign(user._id, user.email)
                return res.status(200).send(ResponseService.createResponse('token', token))
            }
        }
    }
    catch(err) {
        return res.sendStatus(202)
    }
}

export const signup = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    const search = await User.findOne( { email: email } )
    
    if (search) {
        error.message = 'This username is already taken'
        error.type = 'unique'
        return res.status(202).send(ResponseService.createErrorResponse([ error ]))
    }
    else {
        const user = new User()

        user.set('email', email)
        user.set('salt', await PasswordService.generateSalt())
        user.set('password', password)

        try {
            await user.validate()
            user.set('password', await PasswordService.hashPassword(password, user.get('salt')))
            await user.save()
            return res.status(201).send(ResponseService.createResponse(null, null))
        }
        catch (err) {
            const errors = []

            for (let key in err.errors) {
                let error = {
                    field: key,
                    message: err.errors[key].message,
                    type: err.errors[key].kind,
                }
                errors.push(error)
            }
            return res.status(202).send(ResponseService.createErrorResponse(errors))
        }
    }
}