const router = require('express').Router();

const authRouter = require('./auth');

router.get('/', (req, res) => {
   res.send('home screen');
})

router.use('/', authRouter);

module.exports = router;