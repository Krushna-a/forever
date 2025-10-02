const express = require("express");
const router = express.Router();
const { userRegister, userLogin } = require("../Controllers/userController");
const userMW = require("../Middleware/userMW");

// Auth routes
router.post("/user/login", userMW , userLogin);
router.post("/user/register", userRegister);

module.exports = router;

