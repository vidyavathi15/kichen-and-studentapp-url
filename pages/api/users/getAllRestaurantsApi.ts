import { NextApiRequest, NextApiResponse } from "next"
import { kichenDbConnect } from "../../../components/mongoConnect/kichenDbConnect"
// import sampleModel from "../../../components/models/sampleModel"
import kichenRecipeModel from "../../tastyKichen/kichenRecipeModel"

const getAllRestaurants = async (req: NextApiRequest, res: NextApiResponse) => {
    await kichenDbConnect()
    const {method} = req
    if(method === "GET"){
        try{
            // let obj = req.body
        // const studentData =  await sampleModel.get(obj)
        
        // res.status(200).json({success:true, data: studentData})
        const  response = await kichenRecipeModel.find({})
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


export default getAllRestaurants

