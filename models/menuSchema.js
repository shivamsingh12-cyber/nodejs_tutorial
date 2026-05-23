import mongoose from "mongoose";

const menu=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true,
    },
    taste:{
        type:String,
        enum:["sweet","spicy","sour"],
        require:true,
    }
})