import doEnv from 'dotenv';
doEnv.config();


import express from 'express';
import cors from 'cors';


// Router Imports
import loginRouter from './routes/shop/auth/login.js'; 
import signUpRouter from './routes/shop/auth/signup.js';


const app = express();


// Adding Cors Middleware
app.use(cors({
    origin : "*",
    credentials : true
}))

//Dashboard Route or Shop Route
app.use("/login", loginRouter)
app.use("/signup", signUpRouter);

app.get("/", (req,res)=>{
    res.json({success : true})
})

export default app;