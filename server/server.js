const express=require('express');
const parser=require('body-parser');

const {mongoose}=require('./db/mongoose');
const {Todo}=require('./models/Todo');
const {User}=require('./models/User');

var app=express();
app.use(parser.json());

app.post('/todos',(req,res)=>{
    //console.log(req.body);
    var newTodo=new Todo({
        text:req.body.text  
    });
    newTodo.save().then((doc)=>{
        console.log('Successfully saved');
        res.status(200).send(doc);
        console.log(doc);
    }).catch((err)=>{
        console.log(err);
        res.status(400).send(err);
        
    });

});
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({
            todos
        })
    }).catch((err)=>{
        res.status(400).send(e);
    })
});

app.listen(3000,()=>{
    console.log('server running on 3000');
});

module.exports={
    app
}