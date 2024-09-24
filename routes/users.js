const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

/* POST create user. */
router.post('/', controller.create);

/* GET users listing. */
router.get('/', controller.list);

/* GET user defining by id. */
router.get('/:id', controller.index);

/* PUT replace especific user. */
router.put('/:id', controller.replace);

/* PATCH update especific user. */
router.patch('/:id', controller.update);

/* DELETE user by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
