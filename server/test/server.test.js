const expect=require('expect');
const request=require('supertest');

const {app}=require('../server');
const {todo}=require('../models/Todo');

beforeEach((done)=>{
    todo.remove({}).then(()=>{done()});
});

describe('POST /todos',()=>{
    it('should create a new todo',(done)=>{
        var text='test todo text';
    });

    request(app).post('/todos').send({
        text:text
    }).expect(200).expect((res)=>{
        expect(res.body.text).toBe(text);
    }).end((err,res)=>{
        if(err)
        return done(err);
        todo.find().then((todos)=>{
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
        }).catch((e)=>done(e));
    });

})