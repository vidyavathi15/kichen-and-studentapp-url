import type { NextApiRequest, NextApiResponse } from "next";
import sampleModel from "../../../components/models/sampleModel";
import { dbConnect } from "../../../components/mongoConnect/dbConnect";

// const isMethodValid = async (req: NextApiRequest, res: NextApiResponse, apiMethod: string) => {
//     const { method } = req;
//     if (method === apiMethod) return true;
//     else {
//         res.status(400).json({ "message": `This Route does'nt exists ${method} method` });
//         return false;
//     }
//     switch (method) {
//         case "GET": res.status(200).json({ message: "Get method", method: method }); break;
//         case "POST": res.status(200).json({ message: "Post method", method: method }); break;
//         case "DELETE": res.status(200).json({ message: "Delete method", method: method }); break;
//         default: res.status(400).json({ "message": `This Route does'nt exists ${method} method` }); break;
//     }
// }

///CREATE API

 const createStudent =  async (req: NextApiRequest, res: NextApiResponse) => {
    // let isValid = await isMethodValid(req, res, "POST")
    await dbConnect()
    const {method} = req
    if(method === "POST"){
    try{
        let obj = req.body
        const studentData =  await sampleModel.create(obj)
        console.log("create", studentData)
        
        res.status(200).json({success:true, data: studentData})
        
    }
    catch(err) {
        res.status(400).json({success:false, error: err})

    }

}
else{
    res.status(400).json({success: false})
}
}








/// GET ALL API
 


export default createStudent