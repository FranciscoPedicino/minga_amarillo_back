import {Schema,Types,model} from 'mongoose'


let schema =new schema({
name:{type:String ,required:true},
last_name:{type:Number, required:false},
city:{type:String ,required:true},
conutry:{type:String ,required:true},
date:{type:Date,required:true},
photo:{type:String ,required:true},
active:{type:Boolean, reuquired:true },
users_id:{type:Types.ObjectId,
ref:'users',
required:true}


})
let collection='authors'
let Authors=(schema,collection)
export default Authors 