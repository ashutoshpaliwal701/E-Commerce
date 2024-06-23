import { Seller } from "../../../models/seller/seller.js";
import ErroHandeler from "../../../utils/ErrorHandeler.js";
import asyncErroHandeler from "../../../utils/asyncErrorHandeler.js";
import { setToken } from "../../../utils/cookie.js";
import bcrypt from 'bcrypt'

export const loginControl = asyncErroHandeler(async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const userCheck = await Seller.findOne({ email });

    bcrypt.compare(password, userCheck.password,(err, result)=>{
        if(result){const token = setToken({
            name : userCheck.name,
            email : userCheck.email,
            companyName : userCheck.companyName,
            address : userCheck.address,
            phoneNo : userCheck.phoneNo
        });
        res.cookie("uid", token);
        res.status(200).json({
            success: true,
            message: "Successfully Login"
        })}else{
            return new ErroHandeler(400, err);
        }
    });

})
