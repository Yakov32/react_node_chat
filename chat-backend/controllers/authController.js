const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config');

const User = require('./../models/').User;


exports.login = async (req, res) => {
   try {
      console.log(config.appSecret)
      const email = req.body.email;
      const password = req.body.password;

      const user = await User.findOne({
         where: {
            email
         }
      })

      if(!user) res.status(404).json({message: 'user not found'});

      if(!password || !bcrypt.compareSync(password, user.password)) {
         return res.status(404).json({message: 'wrong password'})
      }
      
      
      res.send(generateJWT(user.get({raw: true})));

   } catch (error) {
      console.log(error);
   }
};

exports.register = async (req, res) => {

   try {
      let user = await User.create(req.body);
      user.token = generateJWT(user);

   } catch (e) {
      res.status(400).json({message: e.message, fullError: e});
   }
};


const generateJWT = (user) => {
   const token = jwt.sign(user, config.appSecret, {
      expiresIn: '1w'
   });

   user.token = token;
   return user;
}