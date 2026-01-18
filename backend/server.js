const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const userRouter = require("./Routes/userRoutes");
const adminRouter = require("./Routes/adminRoutes");
const pdtRouter = require("./Routes/pdtRoutes");
const cors = require('cors');
const connectCloudinary = require("./Config/cloudinary");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./Models/UserModel");
const connectToDB = require("./Config/db");

// Connect to services
connectToDB();
connectCloudinary();

// Session configuration
const sessionOption = {
  secret: process.env.SESSION_SECRET || "mysecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 3,
    maxAge: 1000 * 60 * 60 * 24 * 3,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  },
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use("/api", userRouter);
app.use("/api", adminRouter);
app.use("/api", pdtRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).json({
    status: "error",
    message
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Update any import of authMiddleware to isLoggedIn
const isLoggedIn = require("./Middleware/isLoggedIn");

