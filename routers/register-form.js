// routes/home.js
const express = require("express");
const router = express.Router();
const { addhomeform,addhomeresponse } = require("../controllers/form");
const upload=require("../middleware/upload");
const isAuth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
};
// GET
router.get("/register",isAuth, addhomeform);
// POST
router.post("/register",upload.single("image"),addhomeresponse);
//views deatils
exports.houserouter = router;