const {body} = require('express-validator');

exports.rules = () => {
   return [
      body('firstName').optional().isString().isLength({min: 1}),
      body('lastName').optional().isString().isLength({min: 1}),
      body('email').optional().isEmail(),
      body('password').optional().isLength({min: 5}),
   ];
};