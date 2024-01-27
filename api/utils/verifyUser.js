import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  console.log("cookie");
  if (!token) {
    return next(errorHandler(401, 'Unauthorized here'));
    
  }
  console.log("cookie333");
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};