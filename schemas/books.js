const mongoose = require("mongoose");


const  bookSchema = mongoose.Schema({
    title:{type:String , required:true},
    years:{type:Number , required:true},
    userId:{type:mongoose.Schema.Types.ObjectId , required:false , ref:'user'},
});


module.exports = mongoose.model('books', bookSchema)


