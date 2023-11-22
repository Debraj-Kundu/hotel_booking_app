import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/errors.js";

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    await User.create({
      username,
      email,
      password: hash,
    });
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return next(createError(400, "Username or password dosen't match"));

    const {password:pass, isAdmin, ...otherDetails} = user._doc
    res.status(201).json(otherDetails);
  } catch (error) {
    next(error);
  }
};

export { register, login };
