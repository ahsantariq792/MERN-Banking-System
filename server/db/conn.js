const mongoose = require("mongoose")
const DB=process.env.DATABASE;



mongoose.connect(DB,{
    useNewUrlParser: true ,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection established Successfully")
}).catch((err)=> console.log("Error in Connection"))