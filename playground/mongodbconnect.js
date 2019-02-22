//const MongoClient=require('mongodb').MongoClient; //MongoClient allows you to connect to the mongo server and issues
//command to manipulate database.
const {MongoClient}=require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
//     if(err)
//         return console.log("Unable to connect to mongodb");
//     console.log("Connected to MongoDb......");


//     db.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err)
        return console.log("Unable to connect to mongodb");
    console.log("Connected to mongodb.......");
    const db=client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unable to insert todo",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    db.collection('Users').insertOne({
        name:"Sahil",
        age:21,
        location:"Jamshedpur"
    },(err,result)=>{
        if(err){
            return console.log("Unable to add user in collection ",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    client.close();
});