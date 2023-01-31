import { NextApiRequest, NextApiResponse } from "next"
import { dbConnect } from "../../../components/mongoConnect/dbConnect"
import sampleModel from "../../../components/models/sampleModel"



const updateStudentById = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect()
    console.log("id", req.query.id)
    try{
        let obj = req.body
    const {id } = req.query 
        const studentIdData = await sampleModel.findOneAndUpdate({student_id: id}, obj)
        res.status(200).json({success: true, data: studentIdData})
    }
    catch(err){
        res.status(400).json({success:false, error:err})
    }




}


export default updateStudentById