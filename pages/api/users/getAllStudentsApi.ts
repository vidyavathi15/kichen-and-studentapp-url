import { NextApiRequest, NextApiResponse } from "next"
import { dbConnect } from "../../../components/mongoConnect/dbConnect"
import sampleModel from "../../../components/models/sampleModel"

const getAllStudents = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect()
    const {method} = req
    if(method === "GET"){
        try{
            // let obj = req.body
        // const studentData =  await sampleModel.get(obj)
        
        // res.status(200).json({success:true, data: studentData})
        const  response = await sampleModel.find({})
        res.status(200).json({success: true, data: response})

        }
        catch(err){
        res.status(400).json({success:false, error: err})


        }


}

else{
    res.status(400).json({success: false})


}

}


export default getAllStudents