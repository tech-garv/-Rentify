const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../models/user");

// ==================== GET SIGNUP ====================
exports.getSignup = (req, res) => {
  res.render("auth/signup", {
    pageTitle: "Sign Up",
    error: null,
  });
};

// ==================== POST SIGNUP ====================
exports.postSignup = async (req, res) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("auth/signup", {
      pageTitle: "Sign Up",
      error: errors.array()[0].msg,
    });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.render("auth/signup", {
        pageTitle: "Sign Up",
        error: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save user in DB
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.render("auth/signup", {
      pageTitle: "Sign Up",
      error: "Something went wrong",
    });
  }
};

// ==================== GET LOGIN ====================
exports.authlogin = (req, res) => {
  res.render("auth/login", {
    pageTitle: "Login",
    error: null,
  });
};

// ==================== POST LOGIN ====================
exports.authloginp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.render("auth/login", {
        pageTitle: "Login",
        error: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.render("auth/login", {
        pageTitle: "Login",
        error: "Wrong password",
      });
    }

    // ✅ Set session
    req.session.isLoggedIn = true;
    req.session.user = user;

    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.render("auth/login", {
      pageTitle: "Login",
      error: "Login failed",
    });
  }
};

// ==================== LOGOUT ====================
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};