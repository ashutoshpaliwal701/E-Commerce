import express from 'express';
import {testRoute} from '../controllers/test.js'
import singleUpload from '../middleware/multer.js';

const router = express.Router();


router.route("/").post(singleUpload, testRoute);

export default router;