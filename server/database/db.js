import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const USERNAME= process.env.DB_USERNAME
const PASSWORD= process.env.DB_PASSWORD
const connection = async()=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@clusterclone.jyntuo3.mongodb.net/?retryWrites=true&w=majority`
    
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true})
        console.log("database succcessfull connected");
    }catch (error){
        console.log("Not connected",error.message);
        console.log(error)
    }
}
export default connection