import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    img_url:{
        type: String
    },
    res_name:{   
        type:String
    },
    res_cuisine:{
        type:String
    },
    cost:{
        type:String
    },
    rating:{
        type:Number
    },
    location:{
        type:String
    }
})
export default mongoose.models.restaurants || mongoose.model('restaurants', restaurantSchema);