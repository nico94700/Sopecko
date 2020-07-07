const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup); //post pour le front va envoyer des infos 
router.post('/login', userCtrl.login);

module.exports = router;