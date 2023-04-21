import mongoose from 'mongoose'
let schema = new mongoose.Schema({
    email:{type:String ,required:true},
    password:{type:String ,required:true},
    photo:{type:String ,required:true},
    role:{type:Number ,required:true},
    is_online:{type:Boolean ,required:true},
    is_verified:{type:Boolean ,required:true},
    verify_code:{type:String ,required:true},

},

{timestamps:true}
)
let collection = 'users' //debe ser siempre en plural porque es un conjunto de recursos/datos/documentos
let user= mongoose.model( collection ,schema)
export default user 