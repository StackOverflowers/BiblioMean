const mongoose = require("mongoose");

const librarySchema = mongoose.Schema({
    name: String,
    address: String,
    date: {type:Date, default: Date.now },
    dbStatus: Boolean,
});

const library = mongoose.model("library" , librarySchema);
module.exports = library;