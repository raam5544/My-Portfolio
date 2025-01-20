const mongoose = require('mongoose');

// Define the schema
const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumb:{type: Number, required: true},
    email: { type: String, required: true, unique: true },
    query: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create the model
const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;