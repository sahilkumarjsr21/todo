const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{

const db=client.db('TodoApp');
if(err){
    return console.log('problem occured');
}
db.collection('Todos').find({_id:new ObjectID('5c70629583870839c06c027a')}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));

}).catch((err)=>{
    console.log('Unable to fetch todos',err);
});

db.collection('Todos').find().count().then((count)=>{
    console.log(`number of Todos count ${count}`);
}).catch((err)=>{
    console.log('Unable to fetch data',err);
});
db.collection('Users').find({name:"Sahil"}).toArray().then((docs)=>{
    console.log("Users");
    console.log(docs);
}).catch((err)=>{
    console.log("Unable to fetch users data",err);
});
client.close();
});