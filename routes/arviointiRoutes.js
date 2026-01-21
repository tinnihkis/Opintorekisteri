const express = require('express');
const router = express.Router();
const controller = require('../controllers/arviointiController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:idopiskelija/:idOpintojakso', controller.delete);

module.exports = router;
