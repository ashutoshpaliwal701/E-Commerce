import express from 'express';
import {loginControl} from '../../../controllers/shop/auth/loginCont.js';

const router = express.Router();


router.route("/").post(loginControl);


export default router;