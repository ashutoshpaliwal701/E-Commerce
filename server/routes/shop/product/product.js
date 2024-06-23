import express from 'express';
import {productCont} from '../../../controllers/shop/product/productCont.js'
import singleUpload from '../../../middleware/multer.js';


const router = express.Router();

router.route("/").post(singleUpload, productCont);


export default router;