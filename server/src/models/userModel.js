const {Schema, model} = require('mongoose') 
const bcrypt = require('bcrypt') 
const {defaultImgPath} = require('../secret')

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'user name is required'],
        trim: true,
        minlength: [3, 'The length of the user name should be minimum 3 characters'],
        maxlength: [31, 'The length of the user name should be maximum 31 characters'],
    },

    email: {
        type: String,
        required: [true, 'user email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: function (v) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v)
        },
        message: 'Email validation failed'
    },

    password: {
        type: String,
        required: [true, 'user password is required'],
        minlength: [6, 'The length of the password should be minimum 6 characters'],
        set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },

    image: {
        type: String,
        default: defaultImgPath,
    },

    address: {
        type: String,
        required: [true, 'user address is required'],
    },

    phone: {
        type: String,
        required: [true, 'user phone number is required'],
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    isBanned: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const User = new model('User', userSchema)



module.exports = User;