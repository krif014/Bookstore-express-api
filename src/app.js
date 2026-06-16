const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bookRoutes = require('./routes/bookRoutes');
const { swaggerSpec, swaggerOptions } = require('./config/swagger');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());

app.get('/api-docs.json', (req, res) => {
  res.json(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions));

app.use('/api/books', bookRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
