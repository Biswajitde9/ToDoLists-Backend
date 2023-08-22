const lists = require('../models/lists')

module.exports.createNewTodo  = async (req,res) => {
    console.log(req.body);
    const {toDoName, category, date} = req.body;
    await lists.create({toDoName,category,date});
    // alert("Your tasks is created Successfully");
    return res.redirect('back');
}
module.exports.getToDo = async (req,res)=>{
    const toDoLists = await lists.find({});
    // console.log(toDoLists);
    return res.render('home', { title: "Home", toDoLists: toDoLists });
}


module.exports.deleteTodo= async(req,res)=>{
    //get the lists of tasks to delete from the request parameters.
   const checkedLists = JSON.parse(req.params.id);
   
   //try to delete each task from the database
   try{
    for(var checkbox of checkedLists){
   await lists.findByIdAndDelete(checkbox);
    }
    //redirect back to the home page
    return res.redirect('back');
}catch(error){
    //Log the error and redirect back to the home page.
    console.log(`Error in deleting tasks : ${error}`);
    return res.redirect("back");
    }
};

