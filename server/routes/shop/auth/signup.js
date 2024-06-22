import express from 'express';
import {signUpControl} from '../../../controllers/shop/auth/signupCont.js';

const router = express.Router();


router.route("/").post(signUpControl);


export default router;