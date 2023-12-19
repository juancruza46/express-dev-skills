const express = require('express');
const router = express.Router();
const devskillsCtrl = require('../controllers/devskills');

router.get('/', devskillsCtrl.index);
router.get('/new', devskillsCtrl.new);
router.get('/:id', devskillsCtrl.show);
router.get('/:id/edit', devskillsCtrl.edit);
router.post('/', devskillsCtrl.create);
router.delete('/:id', devskillsCtrl.delete);
router.put('/:id', devskillsCtrl.update);



module.exports = router;
