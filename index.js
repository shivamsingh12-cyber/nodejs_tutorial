import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.send("you got it! man");
})

app.listen(3000,()=>{
    console.log('Your server is running');
})