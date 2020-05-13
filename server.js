const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 25545;
const cors = require("cors");

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.options("*", cors());

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON SERVER IS RUNNING");
  console.log({ port });
});
