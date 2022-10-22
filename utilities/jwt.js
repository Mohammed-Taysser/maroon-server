const jwt = require('jsonwebtoken');

// eslint-disable-next-line no-undef
const { JWT_SECRET_KEY = '', JWT_LIFE_TIME = '3d' } = process.env;

function generateToken(user) {
	'use strict';
	return jwt.sign(
		{
			_id: user._id,
			email: user.email,
			name: user.firstName + ' ' + user.lastName,
			username: user.username,
			avatar: user.avatar,
			role: user.role,
		},
		JWT_SECRET_KEY,
		{
			expiresIn: JWT_LIFE_TIME,
		}
	);
}

function verifyToken(token, callback) {
	'use strict';
	return jwt.verify(token, JWT_SECRET_KEY, callback);
}

module.exports = { generateToken, verifyToken };
