import jwt from "jsonwebtoken";
import User from "../models/user.js";

const buildToken = (userId, role) => {
  const secret = process.env.REACT_APP_SECRET;
  if (!secret) {
    throw new Error('JWT secret not configured');
  }
  return jwt.sign({ sub: userId, role }, secret, { expiresIn: "7d" });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      console.warn('[AUTH] Login rejected: missing email or password');
      return res.status(400).json({ message: "Email and password are required" });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      console.warn(`[AUTH] Login rejected for ${normalizedEmail}: user not found`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordIsValid = user.validatePassword(password);
    if (!passwordIsValid) {
      console.warn(`[AUTH] Login rejected for ${normalizedEmail}: incorrect password`);
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
    const attemptedEmail = req.body?.email || "unknown email";
    console.error(`[AUTH] Login error for ${attemptedEmail}`, err);
    return res.status(500).json({ message: "Unable to login" });
  }
};
