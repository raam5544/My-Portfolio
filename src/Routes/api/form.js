const express = require('express');
const router = express.Router();
const formCtrl = require('../../Controllers/api/formController');

// GET /api/items
router.post('/', formCtrl.saveData);
// GET /api/items/:id
// router.get('/:id', itemsCtrl.show);

// router.delete('/:id', itemsCtrl.dele);

module.exports = router;