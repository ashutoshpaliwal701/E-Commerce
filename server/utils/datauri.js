import DataUriParser from 'datauri/parser.js';
import * as path from 'path';
import asyncErroHandeler from './asyncErrorHandeler.js';

const getDataUri = (file) =>{
    try{

  console.log(typeof(file.originalname));
const parser = new DataUriParser();
const extentionName = path.extname(file.originalname).toString();
console.log(typeof(extentionName));
return parser.format(extentionName, file.buffer);
    }catch(err){
        console.log(err);
    }
    
}

export default getDataUri;