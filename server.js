const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('payload.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.rewriter({
	"/api/test/:id": "/posts/:id",
    
}));
server.use(middlewares);
server.use(router);	

let port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log('JSON Server is running on port = ' + port)
});