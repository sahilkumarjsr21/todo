var {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        return console.log("unable to connect to database ",err);
    }
    const db=client.db("TodoApp");

    db.collection('Users').deleteMany({name:'Sahil'}).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log("Unable to delete the data ",err);
    });

    db.collection('Users').findOneAndDelete({_id:new ObjectID("5c70804539dcbe2b70629eb2")}).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log("Unable to delete data ",err);
    });

});