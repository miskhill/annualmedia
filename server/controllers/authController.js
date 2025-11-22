import jwt from "jsonwebtoken";
import User from "../models/user.js";

const buildToken = (userId, role) =>
  jwt.sign({ sub: userId, role }, process.env.SECRET, { expiresIn: "7d" });

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user || !user.validatePassword(password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = buildToken(user._id, user.role);

    return res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    console.log("Login error", err);
    return res.status(500).json({ message: "Unable to login" });
  }
};
