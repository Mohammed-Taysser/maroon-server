const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const routes = require('./routes/index.route');
require('dotenv').config();

// Config
// eslint-disable-next-line no-undef
const { PORT = 8080, MONGO_URL = '' } = process.env;

// not present
if (!MONGO_URL) {
	console.log(`MONGO_URL is not present in your config !!`);
}

// Express instance
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Connect To DB
mongoose
	.connect(MONGO_URL)
	.then(() => {
		// mount api v1 routes
		app.use('/api/v1', routes);

		server.listen(PORT, () => {
			console.log(`🚀 API Server listening on port:${PORT}`);
			console.log(`See: /api/v1/health-check To Check Api Status`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
