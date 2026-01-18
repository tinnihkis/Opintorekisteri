const express = require('express');
const router = express.Router();
const opiskelijaController = require('../controllers/opiskelijaController');

router.get('/', opiskelijaController.getOpiskelijat);
router.post('/', opiskelijaController.addOpiskelija);

module.exports = router;