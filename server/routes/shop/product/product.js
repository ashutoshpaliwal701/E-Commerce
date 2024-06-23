import express from 'express';

const router = express.Router();

router.route("/").post(productCont);


export default router;