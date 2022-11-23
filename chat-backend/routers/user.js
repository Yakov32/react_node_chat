const router = require('express').Router();
const {update} = require('./../controllers/userController');
const {rules: updateRules} = require('../validators/user/update');
const {validate} = require('../validators');
const {userFile} = require('../middleware/fileUpload');

const {auth} = require('./../middleware/auth');

router.post('/update', [auth, userFile(), updateRules(), validate], update);

module.exports = router;