var express = require('express');
var router = express.Router();

var authCtrl = require('./../controllers/auth.controller');
var projectCtrl = require('./../controllers/project.controller');

// Authentication Routing Section
router.post('/api/auth/register',authCtrl.registerUser);
router.post('/api/auth/login', authCtrl.loginUser);

router.get('/api/admin/project/findByUserId', projectCtrl.findByUserId);
router.get('/api/admin/project/findById', projectCtrl.findById);
router.post('/api/admin/project/create', projectCtrl.create);

module.exports = router;