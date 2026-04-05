const express = require("express");
const router = express.Router();

const formController = require("../controllers/form");
const upload = require("../middleware/upload");
// ✅ Middleware
const isAuth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
};

// Public route
router.get("/", formController.getHomes);

// Protected routes
router.get("/home/:id", isAuth, formController.getHomeDetails);

router.get("/edit-home/:id", isAuth, formController.getEditHome);
router.post("/edit-home", isAuth, upload.single("image"), formController.postEditHome);

router.post("/delete-home/:id", isAuth, formController.deleteHome);

module.exports = router;