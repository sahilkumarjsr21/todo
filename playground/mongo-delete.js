const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        return console.log('Unable to connect to database');
    }
    const db=client.db('TodoApp');
    // db.collection('Todos').deleteMany({text:"Eat Lunch"}).then((res)=>{
    //     console.log(res);
    // });

    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((res)=>{     //find the first one and then deletes the first document
    // console.log(res);
    // });
     
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log("unable to delete ",err);
    })
     

    // db.collection('Todos')
});