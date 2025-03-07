import {Router} from 'express';
import { verifyJWT } from '../src/middlewares/auth.middleware.js';
import {
    addBrand,
    removeBrand
} from '../src/controllers/brand.controller.js'
import { upload } from '../src/middlewares/multer.middleware.js';
import { Model } from 'mongoose';

const router=Router()
// middleware is applied to all the routes
router.use(verifyJWT)

router.route("/add-brand").post(upload.single("logo"),
    addBrand);
router.route("/remove-brand").post(removeBrand);


router.get('/', (req, res) => {
    Model.find
});

export default router