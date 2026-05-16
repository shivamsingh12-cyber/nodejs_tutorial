import express from "express";
import mongoose from "mongoose";

const app=express();

app.get("/",(req,res)=>{
    res.send("you got it! man");
})

const mongoUrl="mongodb://localhost:27017/hotels";

mongoose.connect(mongoUrl).then(()=>console.log('You are connected to database!')).catch((err)=>{console.log(err)});

mongoose.Schema({
    name:String,
    city:String,
    age:Number
})

app.post("/save",(req,res)=>)


app.listen(3000,()=>{
    console.log('Your server is running');
})

