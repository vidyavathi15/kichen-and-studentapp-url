
import mongoose from "mongoose";


const StudentSchema =  new mongoose.Schema({
    student_id: {
        type: String

    }, 
    student_name:{
        type:String
    },

    student_email:{
        type:String
    },
    student_dob:{
        type:String
    },
    student_gender:{
        type:String
    },
    srudent_address: {
        type:String
    },
    student_img:{
        type:String
    }






})


export default mongoose.models.sampleModel || mongoose.model('sampleModel', StudentSchema)