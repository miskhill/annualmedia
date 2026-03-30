import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const secureRoute = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) throw new Error('Missing authorization header');

    const [scheme, token] = header.split(' ');
    if (scheme !== 'Bearer' || !token) {
      throw new Error('Invalid authorization header format');
    }

    const secret = process.env.REACT_APP_SECRET;
    if (!secret) {
      throw new Error('JWT secret not configured');
    }

    const payload = jwt.verify(token, secret);
    if (!payload?.sub) throw new Error('Token payload missing subject');

    const user = await User.findById(payload.sub);
    if (!user) throw new Error('User not found for supplied token');

    req.currentUser = user;
    next();
  } catch (err) {
    const route = req.originalUrl || req.url;
    console.warn(`[AUTH] Secure route denied ${req.method} ${route}: ${err.message}`);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
