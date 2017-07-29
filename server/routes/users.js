var express = require('express');
var router = express.Router();
const controllers = require('controllers/users')

// router.get('/:token', controllers.decode)
router.post('/signIn', controllers.signIn)
router.post('/signUp', controllers.signUp)
router.get('/checkToken', controllers.checkToken)

module.exports = router;
