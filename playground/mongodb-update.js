const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser:true},(err,client)=>{
    const db=client.db('TodoApp');
    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c70861d5897822b704c442a')},{
        $set:
        {
            completed:true
        }
    },{returnOriginal:false}).then((doc)=>{
        console.log(doc);
    }).catch((err)=>{
        console.log(err);
    });
    client.close();

});