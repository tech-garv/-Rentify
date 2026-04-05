require("dotenv").config(); // IMPORTANT

console.log("Server starting...");

const express = require("express");
const app = express();
const session = require("express-session");

const homepage = require("./routers/home");
const authlogin = require("./routers/authlogin");
const { houserouter, homes } = require("./routers/register-form");

const sequelize = require("./data/database");
const User = require("./models/user");
const PORT = process.env.PORT || 3000;

// Session
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false
}));

// Global variable
app.use((req, res, next) => {
  res.locals.isLoggedIn = req.session.isLoggedIn;
  next();
});

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));

// View engine
app.set("view engine", "ejs");
app.set("views", "views");

// Logger
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

// Routes
app.use(homepage);
app.use(authlogin);
app.use(houserouter);

console.log(homes);

// ✅ Start server AFTER DB connection
sequelize
  .sync()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () => {
      console.log(` server is running http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));