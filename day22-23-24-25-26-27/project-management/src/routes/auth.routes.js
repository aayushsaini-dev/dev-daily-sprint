import { Router } from "express";
import {
  registerUser,
  login,
  logoutUser,
  verifyEmail,
  refreshAccessToken,
  forgotPasswordRequest,
  resetForgotPassword,
  getCurrentUser,
  changeCurrentPassword,
  resendEmailVerification,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.midldewares.js";
import {
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegisterValidator,
  userResetForgotPasswordValidator,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
// Unsecured route
//register
router.route("/register").post(userRegisterValidator(), validate, registerUser);
// login
router.route("/login").post(userLoginValidator(), validate, login);
//veify email
router.route("/verify-email/:verificationToken").get(verifyEmail);
// refresh token
router.route("/refresh-token").post(refreshAccessToken);
// forgot password
router
  .route("/forgot-password")
  .post(userForgotPasswordValidator(), validate, forgotPasswordRequest);
// reset password
router
  .route("/reset-password/:resetToken")
  .post(userResetForgotPasswordValidator(), validate, resetForgotPassword);

//Secured route
//logout
router.route("/logout").post(verifyJWT, logoutUser);
// current user
router.route("/current-user").post(verifyJWT, getCurrentUser);
//change password
router
  .route("/change-password")
  .post(
    verifyJWT,
    userChangeCurrentPasswordValidator(),
    validate,
    changeCurrentPassword,
  );
//  resent email verification
router
  .route("/resend-email-verification")
  .post(verifyJWT, resendEmailVerification);

export default router;
