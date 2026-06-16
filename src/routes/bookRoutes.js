const express = require('express');
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controllers/bookController');
const validateObjectId = require('../middleware/validateObjectId');

const router = express.Router();

router.route('/').post(createBook).get(getBooks);
router
  .route('/:id')
  .get(validateObjectId, getBookById)
  .put(validateObjectId, updateBook)
  .delete(validateObjectId, deleteBook);

module.exports = router;
