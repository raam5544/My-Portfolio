const DataModel = require('../../Models/Formmodel');

// Function to handle saving data
async function saveData(req, res) {
    try {
        const { name, phnNum,email,query} = req.body;
        console.log(req.body)
        console.log(name,phnNum,email,query)

        // Create an instance of the model and save the data
        const newData = new DataModel({
            name,
            phoneNumb:phnNum,
            email,
            query
            // createdAt: new Date()
        });

        await newData.save(); // Save the data to the database

        // Respond with the saved data
        res.status(201).json({ message: 'Data saved successfully', data: newData });
    } catch (error) {
        // Handle any errors that occur during saving
        res.status(400).json({ message: 'Error saving data', error: error.message });
    }
}

module.exports = { saveData };