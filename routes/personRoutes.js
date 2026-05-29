import express from "express";
import Person from "../models/schme.js";
const router=express.Router();

router.get("/person/:worktype",async (req,res)=>{
    try {
            const worktype=req.params.worktype;
            if (worktype=="manager"|| worktype=="owner" || worktype=="chef") {
                const getperson=await Person.find({work:worktype});
                res.status(200).send(getperson);
            }else{
                res.status(404).json("Not found");
            }
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Internal server Error"});
    }

})

router.get("/getme",async (req,res)=>{
    try {
            const data=await  Person.find({name:{$in:["Varad","Shivam"]}});
       res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Internal server Error"});
    }

})


router.post("/save",async (req,res)=>{
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

router.put("/:id",async (req,res)=>{
    try {
            const data=req.params.id;
            const updateuser=req.body;
   const getPerson=await Person.findByIdAndUpdate(data,updateuser,{
    new: true,
    runValidators:true
   });

   if (!getPerson) {
    res.status(404).send({error:"Not found"});
    console.log(getPerson);
   }
       res.status(201).json(getPerson);
       
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Internal server Error"});
    }
})

export default router;