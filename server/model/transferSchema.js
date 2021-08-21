const mongoose=require('mongoose')


const transferSchema= new mongoose.Schema({
    sendername:{
        type:String,
        required:true
    },
    recivername:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
})
const Transfer=mongoose.model('Transfer',transferSchema);

module.exports=Transfer;