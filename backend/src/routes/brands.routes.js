import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import {
    addBrand,
    removeBrand
} from '../controllers/brand.controller.js'
import { upload } from '../middlewares/multer.middleware.js';

const router=Router()
// middleware is applied to all the routes
router.use(verifyJWT)

router.route("/add-brand").post(upload.single("logo"),
    addBrand);
router.route("/remove-brand").post(removeBrand);




export default router