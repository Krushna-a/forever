const express = require("express");
const User = require("../Models/UserModel")

const userRegister = async (req, res) => {
  try {
    let { username, email, password } = req.body; 

    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);

    res.json({
      status: "success",
      message: "User Registered Successfully",
      user: registeredUser,
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: "failure",
      message: error.message || "An Error Occurred",
    });
  }
};


const userLogin = (req, res) => {
  try {
    res.json({
      status: "success",
      messsage: "User Logged In Successfully",
    });
  } catch (error) {
    res.json({
      status: "failure",
      messsage: "An Error Occured",
    });
  }
};
module.exports = {userRegister, userLogin };
