const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    name:String,
    author:String,
    id_library:{ type: mongoose.Schema.ObjectId, ref: "library" },
    date:{type:Date,default:Date.now},
    Status: Boolean,
});

const book = mongoose.model('book', bookSchema);


module.exports = book;