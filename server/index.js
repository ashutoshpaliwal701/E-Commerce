import app from './app.js';
import connectToDB from './config/connect.js';
import ErroMiddleWare from './middleware/errormid.js';
import cloudinary from "cloudinary";


const port = process.env.PORT || 8000;

// Cloudinary Configuration
cloudinary.v2.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SCERET // Click 'View Credentials' below to copy your API secret
});

connectToDB();

app.use(ErroMiddleWare);
app.listen(port, ()=>{
    console.log(`App is Running on Port : http://localhost:${port}`);
})