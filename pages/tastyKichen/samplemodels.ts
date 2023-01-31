
import mongoose from "mongoose";


const LoginSchema =  new mongoose.Schema({
    username:{
        type:String
    }, password:{
        type:String
    }
})


export default mongoose.models.samplemodels || mongoose.model('samplemodels', LoginSchema)