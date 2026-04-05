const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth");
const { body } = require("express-validator");

// SIGNUP
router.get("/signup", auth.getSignup);
router.post(
  "/signup",
  [
    body("name").notEmpty().withMessage("Name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6+ chars"),
  ],
  auth.postSignup
);

// LOGIN
router.get("/login", auth.authlogin);
router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  auth.authloginp
);

// LOGOUT
router.get("/logout", auth.logout);

module.exports = router;