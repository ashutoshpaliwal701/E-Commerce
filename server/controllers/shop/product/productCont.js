import { Product } from "../../../models/seller/product.js";
import { Seller } from "../../../models/seller/seller.js";
import asyncErroHandeler from "../../../utils/asyncErrorHandeler.js";
import { getToken } from "../../../utils/cookie.js";
import { getDataUri } from "../../../utils/datauri.js";
import cloudinary from 'cloudinary';


export const productCont = asyncErroHandeler(async(req, res) => {
    const {
        name,
        description,
        typePro,
        price
    } = req.body;

    const file = req.file

    const fileCont = getDataUri(file);

    // const myCloud = await cloudinary.v2.uploader.upload(fileCont.content, {
    //     folder : "e-comm",
    //     use_filename : true
    // })
    
    const createProduct = new Product({
        // productImg: [
        //     {
        //         publicId: myCloud.public_id,
        //         secure_url: myCloud.secure_url
        //     }
        // ],
        name,
        description,
        typePro,
        price
    })

    const cookie = req.cookie;
    console.log(cookie);
    
    const updateSeller = await Seller.findOneAndUpdate({

    })

    // await createProduct.save();
    
    res.status(200).json({
        success: true,
        message: "Product Created Successfully"
    });
})