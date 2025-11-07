const { ValidationError } = require('../errors/CustomErrors');

module.exports = function validateProduct(req, res, next) {
  const { name, description, price, category, inStock } = req.body;

  const errors = [];
  if (!name || typeof name !== 'string' || name.trim().length < 2) errors.push('name');
  if (!description || typeof description !== 'string') errors.push('description');
  if (price === undefined || typeof price !== 'number' || price < 0) errors.push('price');
  if (!category || typeof category !== 'string') errors.push('category');
  if (inStock === undefined || typeof inStock !== 'boolean') errors.push('inStock');

  if (errors.length) {
    throw new ValidationError('Invalid product data', { fields: errors });
  }

  next();
};