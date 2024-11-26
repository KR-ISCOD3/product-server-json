const jsonServer = require("json-server"); // import json-server library
const server = jsonServer.create(); // create json-server instance
const router = jsonServer.router('product_db.json'); // route to product json
const middleware = jsonServer.defaults(); // default middleware allows HTTP methods like POST, GET, PUT, DELETE

// configuration .env
const { config } = require("dotenv"); 
config();

// server use middleware and router of your application
server.use(middleware);
server.use(router);

const PORT = process.env.PORT || 3011; // Use PORT from .env or default to 3011
const HOST = process.env.HOST; // Use HOST from .env

server.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`); // Start the server and log its address
});
