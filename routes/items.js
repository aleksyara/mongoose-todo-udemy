var express = require('express');
var router = express.Router();
const itemsCtrl = require('../controllers/items');


router.get('/', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
// router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);
// router.delete('/:id', itemsCtrl.delete);
// router.put('/:id', itemsCtrl.update);


module.exports = router;
