const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is mandatory']
    },
    address:{
        type:String,
        required:[true,'address is mandatory']
    },
    amount:{
        type:Number,
        required:[true,'amount is mandatory']
    },
    timeStamp:{
        type:Date,
        default:Date.now
    }
});


const food = mongoose.model('Food',formSchema);
module.exports = food;
