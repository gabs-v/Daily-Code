const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    description: {
        type: String,
        required:[true,"Description is required"]
    },
    discoveries: {
        type: String,
        required:[true,"Discoveries are required"]
    }
},{timestamps: true})
// Creates an ID

const Entry = mongoose.model('Entry',EntrySchema)

module.exports = Entry;
