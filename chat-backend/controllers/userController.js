const User = require('./../models').User;
const sequelize = require('sequelize');

exports.update = async (req, res) => {
   
   try {
      const [rows, result] = await User.update(
         req.body,
         {
            where: {
               id: req.user.id
            },
            returning: true,
            individualHooks: true,
         }
      )
      console.log('RESULT -- ',result[0].get());

      const user = result[0].get();
      delete user.password;
      res.send(user);

   } catch (e) {
      console.log('ERROR - ', e);
      return res.status(500).json({message: e.message, error: e});
   }
}