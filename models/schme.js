import mongoose from "mongoose";
const mongoUrl="mongodb://localhost:27017/hotels";

mongoose.connect(mongoUrl).then(()=>console.log('You are connected to database!')).catch((err)=>{console.log(err)});

const personSchema=new mongoose.Schema({
    name:String,
    city:String,
    age:Number,
    work:String
})
const Person = mongoose.model("Person", personSchema);
export default Person;