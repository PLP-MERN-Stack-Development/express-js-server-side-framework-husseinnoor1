const { AuthError } = require('../errors/CustomErrors');


module.exports = function auth(req, res, next) {
// For assignment: check header x-api-key
const apiKey = req.header('x-api-key') || req.query.api_key;
const expected = process.env.API_KEY || 'test-api-key';
if (!apiKey || apiKey !== expected) {
throw new AuthError('Missing or invalid API key');
}
next();
};