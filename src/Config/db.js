const mongoose = require('mongoose');

// MongoDB connection string (replace with your own)
const dbURI = 'mongodb+srv://jeyacolombo:K3ezhVBU@cluster0.rq9ih.mongodb.net/'

// Function to connect to the database
function connectDB() {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('Error connecting to MongoDB', err);
        });
}

module.exports = connectDB;