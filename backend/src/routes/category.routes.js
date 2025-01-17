import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';


const router=Router()
// middleware is appleid to all the routes
router.use(verifyJWT)


export default router