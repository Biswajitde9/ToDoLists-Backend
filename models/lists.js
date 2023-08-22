// Import the Mongoose library.
const mongoose=require('mongoose');

// Define the task schema.
const listsSchema = new mongoose.Schema({
    // The description of the task.
    toDoName:{
        type: String,
        required: true
    },
    // The category of the task.
    category:{
        type: String,
        required: true
    },
     // The due date of the task.
    date:{
        type: String,
        required: true
    }
});

// Create the Task model.
const lists = mongoose.model('lists',listsSchema);

// Export the Task model.
module.exports= lists;