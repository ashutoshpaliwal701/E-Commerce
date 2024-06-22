import mongoose, { mongo } from "mongoose";

const sellerSchema = new mongoose.Schema({
    name : {
        type : String, 
        require : [true, "Enter Your Name"]
    },
    email: {
        type: String,
        unique : true,
        require : [true, "Enter Your Email"]
    },
    password : {
        type : String,
        require : [true, "Enter Your Password"],
        minLength : [6, "Password Must be at least 6 character"]
    },
    companyName : {
        type : String, 
        require : [true, "Enter Your Company Name"]
    },
    productList : [
        {
            productId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Products"
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now()
    },
    location :{
        type : String, 
        require : True
    }
})

export const Seller = mongoose.model("Seller" , sellerSchema);