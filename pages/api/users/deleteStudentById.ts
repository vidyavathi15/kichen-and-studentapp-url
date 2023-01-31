import { NextApiRequest, NextApiResponse } from "next"
import { dbConnect } from "../../../components/mongoConnect/dbConnect"
import sampleModel from "../../../components/models/sampleModel"



const deleteStudentById = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect()
    console.log("id", req.query.id)
    try{

    const {id } = req.query 
        const studentIdData = await sampleModel.findOneAndDelete({student_id: id})
        res.status(200).json({success: true, data: studentIdData})
    }
    catch(err){
        res.status(400).json({success:false, error:err})
    }




}


export default deleteStudentById