import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';
import { addCar,getCarByName,getCars,deleteCar,updateCar } from '../controllers/car.controller.js';

const router=Router()
// middleware is appleid to all the routes
router.use(verifyJWT)
router.route("/add-car").post(upload.array("images"), addCar);//tested
router.route("/getCarByName").post(getCarByName);
router.route("/get-cars").post(getCars);//tested
router.route("/delete-car").post(deleteCar);//tested
router.route("/update-car").post(upload.array("images"),updateCar);

export default router