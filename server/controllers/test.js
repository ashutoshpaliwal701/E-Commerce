import asyncErroHandeler from '../utils/asyncErrorHandeler.js';

export const testRoute = asyncErroHandeler(async(req,res) => {
    res.status(200).json({ success : true, message : "Testing Complite"});
})