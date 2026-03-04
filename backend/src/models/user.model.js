const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({
    fullname: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    phonenumber: {type: String, require: true},
    nationality: {type: String, require: true},
    birthday: {type: Date, require: true},
    sex: {type: String, require: true},
},
{
    timestamps: true,
},
);

module.exports = mongoose.model('User', userModel);