const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:1
    },
    birthYear : {
        type: Number ,
        required : true
    },
})



module.exports = mongoose.model('User',userSchema)