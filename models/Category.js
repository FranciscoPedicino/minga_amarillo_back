import mongoose from "mongoose";

let schema = new mongoose.schema({
    name:{type:String,required:true},
    color:{type:String,required:true},
    hover:{type:String,required:true},
    description:{type:String,required:true},
    cover_photo:{type:String,required:true},
    character_photo:{type:String,required:true},
},
{timestime:true})
let collection='categories'
let Category=mongoose.model(schema,collection )
export default Category
