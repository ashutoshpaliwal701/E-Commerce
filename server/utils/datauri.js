import DataUriParser from 'datauri/parser.js';
import * as path from 'path';
import cloudinary from 'cloudinary';
import asyncErroHandeler from './asyncErrorHandeler.js';


export const getDataUri = (file) =>{
    try{
const parser = new DataUriParser();
const extentionName = path.extname(file.originalname).toString();
return parser.format(extentionName, file.buffer);
    }catch(err){
        console.log(err);
    }
    
}


