import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const secureRoute = async (req, res, next) => {

  try {
    const header = req.headers.authorization;
    if (!header) throw new Error('Missing authorization header');

    const token = header.split(' ')[1];
    const payload = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(payload.sub);

    if (!user) throw new Error('User not found');
    req.currentUser = user;
    next();

  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
