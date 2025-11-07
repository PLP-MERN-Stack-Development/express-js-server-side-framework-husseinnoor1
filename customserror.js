class AppError extends Error {
constructor(message, status = 500, details = null) {
super(message);
this.status = status;
this.details = details;
}
}


class NotFoundError extends AppError {
constructor(message = 'Not Found') {
super(message, 404);
}
}


class ValidationError extends AppError {
constructor(message = 'Validation Error', details = null) {
super(message, 400, details);
this.details = details;
}
}


class AuthError extends AppError {
constructor(message = 'Unauthorized') {
super(message, 401);
}
}


module.exports = { AppError, NotFoundError, ValidationError, AuthError };