const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env ' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO Use Express middleware to handle cookies (JWT)
server.express.use(cookieParser()); // Gets cookies as a nice object

server.start(
	{
		cors: {
			credentials: true,
			origin: process.env.FRONTEND_URL,
		},
	},
	deets => {
		console.log(`Server is now running on port http://localhost${deets.port}`);
	}
);
