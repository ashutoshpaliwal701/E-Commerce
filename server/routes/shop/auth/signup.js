import express from 'express';
import {signUpControl} from '../../../controllers/shop/auth/signupCont.js';
import singleUpload from '../../../middleware/multer.js';

const router = express.Router();


router.route("/").post(singleUpload,signUpControl);
router.route("/").get((req,res)=>{
    res.send("Sign Up Page");
});


export default router;