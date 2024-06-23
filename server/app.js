import doEnv from 'dotenv';
doEnv.config();


import express from 'express';
import cors from 'cors';


// Router Imports
import loginRouter from './routes/shop/auth/login.js'; 
import signUpRouter from './routes/shop/auth/signup.js';
import testURL from './routes/test.js';


const app = express();


// Adding Cors Middleware
app.use(cors({
    origin : "*",
    credentials : true
}))
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Dashboard Route or Shop Route
app.use("/login", loginRouter)
app.use("/signup", signUpRouter);
app.use("/test", testURL)

app.get("/", (req,res)=>{
    res.json({success : true})
})

export default app;