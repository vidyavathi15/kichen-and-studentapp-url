import { NextApiRequest, NextApiResponse } from "next"
import { dbConnect } from "../../../components/mongoConnect/dbConnect"
import sampleModel from "../../../components/models/sampleModel"



const getStudentById = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect()
    try{

    const {student_id} = req.query 
        const studentIdData = await sampleModel.findOne({student_id: student_id})
        res.status(200).json({success: true, data: studentIdData})
    }
    catch(err){
        res.status(400).json({success:false, error:err})
    }




}


export default getStudentById