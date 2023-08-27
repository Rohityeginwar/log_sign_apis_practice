let mongoose = require ("mongoose")


let registerSchema =  new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email :{
        type : String,
        require : true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email")
            }
        }
    },
    password : {
        type : Number,
        require : true,
        minLen : 5,
        maxLen : 10 
    },
    phone :{
        type:Number,
        require : true,
    }
})

let RegisterModel = new mongoose.model("student" , registerSchema)


module.exports = RegisterModel 