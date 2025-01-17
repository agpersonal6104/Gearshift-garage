import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import {
    addBrand
} from '../controllers/brand.controller.js'

const router=Router()
// middleware is applied to all the routes
router.use(verifyJWT)

router.route("/add-brand").post(addBrand);



export default router