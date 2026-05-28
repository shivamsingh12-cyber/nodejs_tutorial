import express from "express";

import PersonRoutes from "./routes/personRoutes.js"
import menuRoutes from "./routes/menuRoutes.js"


const app=express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("you got it! man");
})

app.use("/",PersonRoutes);
app.use("/",menuRoutes);









app.listen(3000,()=>{
    console.log('Your server is running on 3000');
})

