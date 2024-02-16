const express = require("express");

const app = express();

const port = 3000;


app.post("/",function(req,res){

})

app.get("/hi",function(req,res){

    res.json({
        msg: "hello world!"
    })
})

app.put("/",function(req,res){

})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})