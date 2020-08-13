const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsControllers')

router.get('/', controller.listar)




module.exports = router;