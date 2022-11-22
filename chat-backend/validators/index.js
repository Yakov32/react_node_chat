const { validationResult } = require('express-validator');

exports.validate = (req, res, next) => {
   console.log('hi');
   errors = validationResult(req);
   console.log('errors -- ', errors.array());
   if(!errors.isEmpty()) {
      return res.status(400).json({message: 'validation failed', errors});
   }
   
   next();
}