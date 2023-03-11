const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// MONGOOSE CONNECTION
mongoose.connect("mongodb+srv://saicharan2001kande:YKuaRNbkaCQ2QBGx@cluster1.0ptahnc.mongodb.net/Backend_MP").then(()=>{
    console.log("Connection to mongoDB cloud is successful")
}).catch((err) => console.log("Not connected"));

// SCHEMA
const QA_Schema = new mongoose.Schema({
    question : {
        type : String,
        required:[true,"Please check no question specified"]
    },
    answer : {
        type : String,
        required: [true,"Please check no answer specified"]
    },
    date : Date
});

// MODEL
const QA_Model = mongoose.model("QandA",QA_Schema);


// CREATE AND INSERT MANY DOCUMENTS 
const qa1 = new QA_Model({
    question : "Cultivation and production of rice",
    answer : "Preparation of field , transplantation of seeds , field maintenance , harvesting , Threshing , winnowing and milling"
})
// qa1.save();

const qa2 = new QA_Model({
    question : "Cultivation and production of wheat procedure",
    answer : "The wheat crop requires a well-pulverized but compact seed bed for good and uniform germination. Three or four ploughings in the summer, repeated harrowing in the rainy season, followed by three or four cultivations and planking immediately before sowing produce a good, firm seed bed for the dry crop on alluvial soils."
})
const qa3 = new QA_Model({
    question : "Kharif season crops",
    answer : "rice, sorghum, maize, tea, rubber, coffee, guar, Sesame, cereals such as Arhar Dhal, pearl millet, soybeans, cotton, oilseeds"
})
// QA_Model.insertMany([qa1,qa2,qa3]);



// RETRIEVE DATA 
// QA_Model.find(function(err,qa){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(qa);
//     }
// })
// const data = QA_Model.find({ name: /wheat/}, 'answer');
// if(data){
//     console.log(data);
// }

// UPDATE DATA

// DELETE DATA

app.get("/",function(req,res){
    res.send("Home page of Website");
});

app.get("/marketplace",function(req,res){
    res.send("Market place page of website")
})

app.get("/rent",function(req,res){
    res.send("Rent page of Website");
});

app.get("/product",function(req,res){
    res.send("Product page of Website");
});

app.get("/admin",function(req,res){
    res.send("Admin page of Website");
});

app.get("/sale",function(req,res){
    res.send("Sale page of Website");
});

app.get("/productSale",function(req,res){
    res.send("Product Sale page of Website");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});