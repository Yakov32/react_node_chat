const {body} = require('express-validator');

exports.rules = () => {
   return [
      body('firstName').optional().isString(),
      body('lastName').optional().isString(),
      body('email').optional().isEmail(),
      body('password').optional().isLength({min: 5}),
   ];
};