import User from "../models/User.js";

const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    await User.create({
      username,
      email,
      password,
    });
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export { register };
