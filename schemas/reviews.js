const mongoose = require("mongoose");


const  reviewSchema = mongoose.Schema({
    bookId:{type:mongoose.Schema.Types.ObjectId , required:false , ref:'books'},
    userId:{type:mongoose.Schema.Types.ObjectId , required:false , ref:'users'},
    comment:{type:String, required:true},
    note:{
        type:Number,
        enum:[1,2,3,4,5],
        required:true
    },
    date:{type:Date, required:true}
});


module.exports = mongoose.model('reviews', reviewSchema)


