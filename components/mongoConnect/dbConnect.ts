import mongoose from "mongoose";



export const dbConnect = () => {

    mongoose.connect('mongodb://localhost:27017/studentDB');
    // mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_URL }).then(() => console.log("MongoDb Connected"))
    mongoose.set('strictQuery', true);
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db');
    })

    mongoose.connection.on('error', (err) => {
        console.log(err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection is disconnected');
    });

    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        process.exit(0);
    })
}