const { Router } = require('express');

const {
  getAllHandler,
  getByIdHandler,
  createHandler,
  updateHandler,
  removeHandler,
} = require('./user.controller');

const router = Router();

router.get('/', getAllHandler);
router.get('/:id', getByIdHandler);
router.post('/', createHandler);
router.patch('/:id', updateHandler);
router.delete('/:id', removeHandler);

module.exports = router;
