import express from "express";
import Person from "./models/schme.js";

const app=express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("you got it! man");
})




app.post("/save",async (req,res)=>{
    try {
            const data=req.body;
    const newPerson=new Person(data);
   const getPerson=await newPerson.save();
       res.status(201).json(getPerson);
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Internal server Error"});
    }

})


app.listen(3000,()=>{
    console.log('Your server is running');
})

