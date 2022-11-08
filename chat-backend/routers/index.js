const router = require('express').Router();

const User = require('../models/').User;

const authRouter = require('./auth');

router.get('/', (req, res) => {
   res.send('home screen');
})

router.get('/users', async (req, res) => {
   try {
      let users = await User.findAll();
      res.json(users);
   } catch (e) {
      res.status(500).json({message: e.message, fullError: e})
   }
})

router.use('/', authRouter);

module.exports = router;