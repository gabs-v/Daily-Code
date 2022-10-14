const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    description: {
        type: String
    },
    discoveries: {
        type: String
    },
    challenges: {
        type: String
    }
},{timestamps: true})
// Creates an ID

const Entry = mongoose.model('Entry',EntrySchema)

module.exports = Entry;
