import express from "express";
import Person from "./models/schme.js";
import Menu from "./models/menuSchema.js";


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


app.get("/getme",async (req,res)=>{
    try {
            const data=await  Person.find({name:{$in:["Varad","Shivam"]}});
       res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Internal server Error"});
    }

})
app.get("/person/:worktype",async (req,res)=>{
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


app.listen(3000,()=>{
    console.log('Your server is running on 3000');
})

