const googleController = require('../../controllers/googleController');
const router = require('express').Router();

router
  .route('/')
  .get(googleController.findAll);

module.exports = router;