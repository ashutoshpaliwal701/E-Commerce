import bcrypt from 'bcrypt';
import { Seller } from "../../../models/seller/seller.js";
import asyncErroHandeler from "../../../utils/asyncErrorHandeler.js";
import ErroHandeler from "../../../utils/ErrorHandeler.js";
import { setToken } from "../../../utils/cookie.js";
import getDataUri from '../../../utils/datauri.js';
import cloudinary from 'cloudinary';

export const signUpControl = asyncErroHandeler(async (req, res) => {
    const {
        name,
        email,
        password,
        companyName,
        address,
        phoneNo } = req.body;


    const userCheck = await Seller.findOne({ email });

    if (userCheck) {
        res.status(400).json({
            success: false,
            message: "A User with This email is Already Exist You Need To LogIn"
        })
    } else {


        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                new ErroHandeler(400, "Error in Storing HASH");
            }

            
            console.log(fileUpload);
            const newSeller = new Seller({
                name: name,
                email: email,
                companyName: companyName,
                address: address,
                password: hash,
                phoneNo: phoneNo
            })

            const isCreated = await newSeller.save();
            if (!isCreated) {
                return new ErroHandeler(400, "User is Not Created");
            }


        })

        const token = setToken({
            name,
            email,
            companyName,
            address,
            phoneNo
        });

        res.cookie("uid", token);
        res.status(200).json({
            success: true,
            message: "User Created Successfully",
        });
    }

})


// Change Profile Pic Route Which is PUT

export const userProfile = (req,res) =>{


    const file = req.file;
    
    const fileUpload = asyncErroHandeler(async(file) =>{
        if(file){
            const pic = getDataUri(file);
            const myCloud = await cloudinary.v2.uploader.upload(pic.content, {
                folder: "e-comm",
                use_filename : true
            })
            return myCloud;
        }
        else{
            return myCloud = {
                publicId : null,
                secure_url : null
            }
        }
    })
}