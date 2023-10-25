const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();

mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://niteeshch57:12345@cluster0.ywxfyje.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to Db"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
    console.log("Server Started at 4000");
})
