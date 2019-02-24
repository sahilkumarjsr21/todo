//const {mongoose}=require('../server/db/mongoose');
const {ObjectID}=require('mongodb');
const {Todo}=require('../server/models/Todo');
const {Users}=require('../server/models/User');

var id='5c723f080ba1be1910057067';
if(!ObjectID.isValid(id)){
    return console.log("Id not valid");
}

Todo.find({
    _id:id
}).then((todos)=>{
    console.log(todos);
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log(todo);
});

Todo.findById(id).then((todoById)=>{
    console.log(todoById);
});

Users.findById(id).then((user)=>{
    if(!user)
        return console.log("No user found");
    console.log(user);
}).catch((err)=>{
    console.log(err);
});