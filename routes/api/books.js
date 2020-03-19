const bookController = require('../../controllers/bookController');
const router = require('express').Router();

router.route('/')
  .get(bookController.findAll)
  .post(bookController.create);

router
  .route('/:id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
