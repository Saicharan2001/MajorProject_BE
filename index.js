const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// MONGOOSE CONNECTION
mongoose.connect("mongodb+srv://saicharan2001kande:YKuaRNbkaCQ2QBGx@cluster1.0ptahnc.mongodb.net/?retryWrites=true&w=majority/Backend_MP").then(()=>{
    console.log("Connection to mongoDB cloud is successful")
}).catch((err) => console.log("Not connected"));

const QA_Schema = new mongoose.Schema({
    question : String,
    answer : String,
    date : Date
});

const QA_Model = mongoose.model("QandA",QA_Schema);

const qa1 = new QA_Model({
    question : "Cultivation and production of rice",
    answer : "Preparation of field , transplantation of seeds , field maintenance , harvesting , Threshing , winnowing and milling"
})




app.get("/",function(req,res){
    res.send("<h1> Hello world </h1>");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});