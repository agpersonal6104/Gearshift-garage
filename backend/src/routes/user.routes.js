import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register")
.post(upload.single('profile_pic'), registerUser);
router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT,logoutUser) //tested
router.route("/refresh-token").post(refreshAccessToken)
router.route("/user-profile").post(verifyJWT,getCurrentUser)
router.route("/change-username").post(verifyJWT,updateAccountDetails)
router.route("/change-profilepic").post(verifyJWT,updateProfilePic)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)

export default router;
