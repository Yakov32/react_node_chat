const jwt = require('jsonwebtoken');
const config = require('./../config/config');

exports.auth = (req, res,next) => {

   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];

   if(!token) {
      return res.status(401).json({message: 'Missing token!'});
   }

   jwt.verify(token, config.appSecret, (err, user) => {
      if(err) {
         return res.status(401).json({message: err.message, error: err});
      }

      req.user = user;
   })

   next();
}