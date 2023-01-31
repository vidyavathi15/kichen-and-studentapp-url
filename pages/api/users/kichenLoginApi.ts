import { NextApiRequest, NextApiResponse } from 'next';
import { kichenDbConnect } from '../../../components/mongoConnect/kichenDbConnect';
import samplemodels from '../../tastyKichen/samplemodels';


export const TastyKichenLoginApi = async (req: NextApiRequest, res: NextApiResponse) => {
    await kichenDbConnect()
    const {method} = req
    if(method === "POST"){
    try{
        let obj = req.body
        const studentData =  await samplemodels.create(obj)
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