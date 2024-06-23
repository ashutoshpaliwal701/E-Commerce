import cloudinary from 'cloudinary';
import getDataUri from "../utils/datauri.js";
import asyncErroHandeler from '../utils/asyncErrorHandeler.js';

export const testRoute = asyncErroHandeler(async(req,res) => {

    const {
        name,
        email,
        password,
        companyName,
        address,
        phoneNo } = req.body;

        console.log({
            name,
            email,
            password,
            companyName,
            address,
            phoneNo});
    
    const file = req.file;
    const fileUri = getDataUri(file);
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
        folder : "e-comm",
        use_filename : true
    })
    console.log(myCloud);
    res.status(200).json({ success : true, message : "Testing Complite"});
})