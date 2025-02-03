import {Router} from 'express';
import { verifyJWT } from '../src/middlewares/auth.middleware.js';
import { upload } from '../src/middlewares/multer.middleware.js';
import { addCar,getCars,deleteCar,updateCar } from '../src/controllers/car.controller.js';

const router=Router()
// middleware is appleid to all the routes
router.use(verifyJWT)
router.route("/add-car").post(upload.array("images"), addCar);//tested
// router.route("/getCarByName").post(getCarByName);
router.route("/get-cars").post(getCars);//tested
router.route("/delete-car").post(deleteCar);//tested
router.route("/update-car").post(upload.array("images"),updateCar);

export default router