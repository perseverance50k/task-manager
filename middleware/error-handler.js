const { CustomAPIError } = require('../errors/custom-error.js');

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ error: err.message, statusCode: err.statusCode });
    }

    return res.status(500).json({ message: 'Something went wrong, please try again' });
};

module.exports = errorHandlerMiddleware;