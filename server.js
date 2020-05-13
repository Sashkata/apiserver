const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults({ noCors: true });
const router = jsonServer.router("db.json");
const port = process.env.PORT || 25545;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON SERVER IS RUNNING");
  console.log({ port });
});
