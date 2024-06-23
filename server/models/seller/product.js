import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image : [
        {
            type : String, 
        }
    ],
    name : {
        type : String, 
        require : [true, "Enter The Product Name"]
    },
    description : {
        type : String,
        require : [true, "Enter the Product Descrption"],
        maxLength : [100, "The Description is less than 100 word"]
    },
    view : {
        type : Number,
        default : 0
    },
    createAt : {
        type : Date, 
        default : Date.now()
    },
    selles : {
        type : Number,
        default : 0
    },
    customerList : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Customer"
        }
    ],
    typePro : {
        type : String, 
    },
    price : {
        type : Number,
        require : [true, "Price is Must"]
    },
    
})

export const Product = mongoose.model("Product", productSchema);