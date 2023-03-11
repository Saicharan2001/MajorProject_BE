const express = require("express");
const bodyparser = require("body-parser")

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("<h1> Hello world </h1>");
})


app.get("/contact",function(req,res){
    res.send("This is SaiCharan")
})
app.listen(3000,function(){
    console.log("Server started at port 3000");
});