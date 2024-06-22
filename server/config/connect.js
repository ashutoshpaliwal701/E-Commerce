import mongoose from "mongoose";

const connectToDB =  async() =>{
    try{
        await mongoose.connect(process.env.DB_STR, {
            dbName: "E-Commerce",
        })
        console.log("Connected Successfully");
    }
    catch(err){
        console.log(err);
    }
};


export default connectToDB;