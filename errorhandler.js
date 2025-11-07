const { NotFoundError, ValidationError, AuthError } = require('../errors/CustomErrors');


function notFoundHandler(req, res, next) {
const err = new NotFoundError('Route not found');
next(err);
}


function errorHandler(err, req, res, next) {
console.error(err);


if (err instanceof ValidationError) {
return res.status(400).json({ error: err.message, details: err.details || null });
}


if (err instanceof AuthError) {
return res.status(401).json({ error: err.message });
}


if (err instanceof NotFoundError) {
return res.status(404).json({ error: err.message });
}


// default 500
res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
}


module.exports = { notFoundHandler, errorHandler };