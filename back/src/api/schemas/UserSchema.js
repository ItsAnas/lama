'use strict'

import { Schema } from 'mongoose'

const UserSchema = new Schema({
    email: {
        lowercase: true,
        match: [ /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, 'Invalid email format' ],
        maxlength: 128,
        minlength: 4,
        required: [ true, 'You must provide an email to registrate !' ],
        trim: true,
        type: String,
        unique: true
    },
    password: {
        match: [ /\d+/, 'Invalid password format. Make sure to use at least one digit !' ],
        maxlength: 128,
        minlength: 8,
        required: [ true, 'You must provide a password to registrate !' ],
        type: String
    },
    salt: {
        required: false,
        type: String,
    },
    token: {
        maxlength: 128,
        minlength: 32,
        required: false,
        type: String
    }
})

export default UserSchema
