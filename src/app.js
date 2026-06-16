const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());

app.use('/api/books', bookRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
