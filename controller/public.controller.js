const statusCode = require('../utilities/statusCode');

exports.healthCheck = async (_request, response) => {
	response.status(statusCode.success.ok).json({ status: 'ok' });
};
