// Import the express module.
const express = require("express");
// Import the express-ejs-layouts module.
const expressLayouts = require("express-ejs-layouts");
// Create a constant for the port number.
const port = 8000;
// Import the mongoose module.
const db = require("./config/mongoose");
// Create a new express application.
const app = express();
// Add the express.static middleware.
app.use(express.static("./assets"));
const path = require("path");
const { createNewTodo } = require("./controlllers/ToDoController");
// Add the expressEjsLayouts middleware.
app.use(expressLayouts);
// Add the express.urlencoded middleware.
app.use(express.urlencoded());
app.use(express.json());
//extract style and script from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);


//set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//use express router
app.use("/", require("./routes/index"));


//listen for the server
app.listen(port, function (err) {
  if (err) {
    console.log("There is some error in server");
  }
  console.log("Server is Successfully Running", port);
});
