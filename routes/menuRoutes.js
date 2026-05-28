import express from "express";
import Menu from "../models/menuSchema.js";
const router = express.Router();



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

export default router;