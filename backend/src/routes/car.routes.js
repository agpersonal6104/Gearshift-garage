import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';
import { addCar,getCarByName,getCars,deleteCar,updateCar } from '../controllers/car.controller.js';

const router=Router()
// middleware is appleid to all the routes
router.use(verifyJWT)
router.route("/add-car").post(upload.array("images"), addCar);
router.route("/getCarByName").post(getCarByName);
router.route("/get-cars").post(deleteCar);
router.route("/delete-car").post(getCars);
router.route("/update-car").post(upload.array("images"),updateCar);

export default router