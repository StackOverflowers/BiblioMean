const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name:String,
    description:String,
    Status:Boolean,
    date:{type:Date,default:Date.now},
    Status:Boolean,
})

const role = new mongoose.model('role', roleSchema);

module.exports = role;