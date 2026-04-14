const express = require("express");
const router = express.Router();

const { asyncHandler } = require("../auth/checkAuth");
const { authUser } = require("../middleware/authUser");

const userController = require("../controllers/users.controller");

router.post("/register", asyncHandler(userController.register));
router.post("/login", asyncHandler(userController.login));

router.get("/auth", authUser, asyncHandler(userController.authUser));
router.get("/logout", authUser, asyncHandler(userController.logout));
router.post("/forgot-password", asyncHandler(userController.forgotPassword));   

router.post("/verify-forgot-password", asyncHandler(userController.verifyForgotPassword));

module.exports = router;

