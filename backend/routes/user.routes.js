import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  getCurrentUser,
  changeCurrentPassword,
  updateProfilePic,
  updateAccountDetails,
} from "../src/controllers/user.controller.js";
import { upload } from "../src/middlewares/multer.middleware.js";
import { verifyJWT } from "../src/middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(upload.single("profile_pic"), registerUser);
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser); //tested
router.route("/refresh-token").post(refreshAccessToken);//tested
router.route("/user-profile").post(verifyJWT, getCurrentUser);//tested
router.route("/change-username").post(verifyJWT, updateAccountDetails);//tested
router.route("/change-profilepic").post(verifyJWT, updateProfilePic);//not working
router.route("/change-password").post(verifyJWT, changeCurrentPassword);//tested

export default router;
