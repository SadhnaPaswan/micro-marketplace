const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: "User successfully registered",
    });

  } catch (err) {
    console.log("Error while signUp", err);
    return res.status(500).json({
      success: false,
      message: "Unable to signUp, Please Try again",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // check user
    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not registered",
      });
    }

    // compare password
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    // create payload
    const payload = {
      id: existingUser._id,
      email: existingUser.email,
    };

    // generate token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    // remove password from response
    existingUser.password = undefined;

    // send response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: existingUser,
    });

  } catch (err) {
    console.log("Error while logIn", err);
    return res.status(500).json({
      success: false,
      message: "Unable to logIn, Please try again",
    });
  }
};
