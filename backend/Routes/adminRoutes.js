const express = require('express');
const router = express.Router();
const { adminLogin } = require('../Controllers/adminController');

router.post('/admin/login', adminLogin);

module.exports = router;