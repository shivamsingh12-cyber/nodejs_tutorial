import mongoose from "mongoose";

const menuschema=new mongoose.Schema({
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
const Menu = mongoose.model("Menu", menuschema);
export default Menu;