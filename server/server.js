const express=require('express');
const parser=require('body-parser');
const {ObjectID}=require('mongodb');
const _=require('lodash');


const {mongoose}=require('./db/mongoose');
const {Todo}=require('./models/Todo');
const {User}=require('./models/User');
const {queries}=require('../playground/mongoose-queries');

var app=express();
app.use(parser.json());

var port=process.env.PORT||3000;
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

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send(todo);
    }).catch((err)=>{
        res.status(400).send();
    });
    
});

app.delete('/todos/:id',(req,res)=>{
    var id= req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Inavalid Id');
    }
    Todo.findOneAndDelete({_id:id}).then((todo)=>{
        if(!todo){
            return res.status(400).send('No document found');
        }
        res.status(200).json(todo);
    }).catch((err)=>{
        res.status(404);
        console.log(err);
    });
});

app.patch('/todo/:id',(req,res)=>{
    var id=req.params.id;
    var body=_.pick(req.body,['text','completed']);
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    if(_.isBoolean(body.completed)&& body.completed){
        body.completedAt=new Date().getTime();
    }else{
        body.completed=false;
        body.completedAt=null;
    }
    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
        if(!todo){
            return res.status(400).send();
        }
        res.json(todo);
    }).catch((err)=>{
        res.status(404).send();
    });
});

app.listen(port,()=>{
    console.log(`server running on ${port}`);
});

module.exports={
    app
}