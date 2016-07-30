const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let noteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    userEmail: {type: String, required: true},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('note', noteSchema);