const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const productsRouter = require('./routes/products');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json()); // JSON parser (task requires body-parser)
app.use(logger); // custom logger


// Hello World route
app.get('/', (req, res) => {
res.json({ message: 'Hello World' });
});


// Apply simple auth middleware to API routes
app.use('/api', auth);


// Routes
app.use('/api/products', productsRouter);


// 404 for unknown routes
app.use(notFoundHandler);


// Global error handler
app.use(errorHandler);


app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});