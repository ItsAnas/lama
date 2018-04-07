'use strict'

import Mongoose from 'mongoose'
import UserSchema from '../schemas/UserSchema'

UserSchema.methods.signup = function (email, password) {
    this.default.model.set('password', password)
}

UserSchema.query.byMail = function (email) {
    return this.findOne({ email: new RegExp(email, 'i') })
}
export default Mongoose.model('User', UserSchema)
