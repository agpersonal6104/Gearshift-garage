import {Router} from 'expres';
import { verifyJWT } from '../middlewares/auth.middleware';


const router=Router()
// middleware is appleid to all the routes
router.use(verifyJWT)