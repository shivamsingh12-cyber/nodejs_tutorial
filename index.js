import express from "express";
import Person from "./models/schme.js";
import Menu from "./models/menuSchema.js";


const app=express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("you got it! man");
})





app.post("/savemenu",async (req,res)=>{
    try {
            const data=req.body;
    const newMenu=new Menu(data);
   const getMenu=await newMenu.save();
       res.status(201).json(getMenu);
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Internal server Error"});
    }
})






app.listen(3000,()=>{
    console.log('Your server is running on 3000');
})

