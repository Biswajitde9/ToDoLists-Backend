const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ToDoLists');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"error connection to MongoDB"));

db.once('open', function(){
    console.log("Connected to Database :: monogodb");
});

module.exports= db;