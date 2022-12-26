import jwt from 'jsonwebtoken';
import user from '../models/user.js';

export const secureRoute = async (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.SECRET);
    const user = await user.findById(payload.sub);

    if (!user) throw new Error('User not found');
    req.currentUser = user;
    next();

  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};