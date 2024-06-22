import app from './app.js';
import connectToDB from './config/connect.js';
import ErroMiddleWare from './middleware/errormid.js';
const port = process.env.PORT || 8000;

connectToDB();

app.use(ErroMiddleWare);
app.listen(port, ()=>{
    console.log(`App is Running on Port : http://localhost:${port}`);
})