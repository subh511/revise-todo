const express = require("express");
const { createTodo, updateTodo } = require("./type");

const app = express();

app.use(express.json())

const port = 3000;


app.post("/todo",function(req,res){
    const createPayload = req.body; // for post req
    const parsePayload = createTodo.safeParse(createPayload); // brought zod for necessary steps
    if(!parsePayload){  //saying if payload fails send status 411
        res.status(411).json({
            msg:"you have sent a wrong data"
        })
        return;
    }
    //put it on mongodb;

})

app.get("/todos",function(req,res){

    res.json({
        msg: "hello world!"
    })
})

app.put("/completed",function(req,res){

    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);
    if(!parsePayload){
        res.status(411).json({
            msg:"you have sent a wrong data"
        })
        return;
    }

})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})