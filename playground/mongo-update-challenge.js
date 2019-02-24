const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{
    const db=client.db("TodoApp");
    db.collection('Users').findOneAndUpdate({_id:new ObjectID('5c70802539dcbe2b70629eb1')},{
        $set:{
            name:"Sahil"
        },
        $inc:{
            age:1     
        }
    },{returnOriginal:false}).then((doc)=>{
        console.log(doc);
    }).catch((err)=>{
        console.log(err);
    });
    client.close();
});