// Import the Express module.
const express = require('express');
const { createNewTodo ,deleteTodo,getToDo} = require('../controlllers/ToDoController');
// Create a new router object.
const router = express.Router();
// router.get('/',function(req,res){
//     return res.render('home',{title: 'ToDoLists'});
// })
router.get('/',getToDo);


// Define a route for creating a new task.
router.post('/create-newtodo',createNewTodo);
// Define a route for deleting a task.
router.get('/delete-todo/:id',deleteTodo);

// Export the router object.
module.exports=router;
