import { Router } from "express";
import { verifyJWT } from "../src/middlewares/auth.middleware.js";
import {
  addCategory,
  removeCategory,
  searchCategories
} from "../src/controllers/categories.controller.js";

const router = Router();
// middleware is appleid to all the routes
router.use(verifyJWT);

router.route("/add-category").post(addCategory);
router.route("/remove-category").post(removeCategory);
router.route("/remove-category").get(searchCategories);

export default router;