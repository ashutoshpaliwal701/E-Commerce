import mongoose, { mongo } from "mongoose";
import { Product } from "../seller/product";

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
    createdAt : {
        type : Date,
        default : Date.now()
    },
    location :{
        type : String, 
        require : true
    },
    phoneNo : {
        type : Number,
        require : [true, "Enter You Phone NO."]
    },
    order : [
        {
            p_name : mongoose.Schema.Types.ObjectId,
            ref : "Product"
        }
    ], 
    cart : [
        {
            p_name : mongoose.Schema.Types.ObjectId,
            ref : "Product"
        }
    ]
})

export const Seller = mongoose.model("Seller" , sellerSchema);