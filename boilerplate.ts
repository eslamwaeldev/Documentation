import { createServer } from "http";

// Create server
const server = createServer((req, res) => {});

// Server Setup to listen to port 3000

const port = 3000;
const hostname = "127.0.0.1";
server.listen(port, hostname, () => {
  console.log("Server running");
});
