const mongoose = require('mongoose');

const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: 'Book not found' });
  }

  next();
};

module.exports = validateObjectId;
