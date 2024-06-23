import { Product } from "../../../models/seller/product";
import asyncErroHandeler from "../../../utils/asyncErrorHandeler";

export const productCont = asyncErroHandeler((req,res) =>{
    const {
        name,
        description,
        typePro,
        price
    } = req.body;
})