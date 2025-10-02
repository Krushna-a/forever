// userMW.js
const passport = require("passport");

module.exports = passport.authenticate("local", {
  failureRedirect: "/api/user/login",
});
