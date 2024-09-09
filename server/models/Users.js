const mongoose= require('mongoose')


const UsersSchema =new mongoose.Schema({
    email: {
        type:String,
        unique : true
    },
    password:{
        type:String,
        require: true
    }
})


const Usermodel = mongoose.model("Users",UsersSchema)

module.exports = Usermodel


