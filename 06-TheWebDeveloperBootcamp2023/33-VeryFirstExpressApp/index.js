const express = require("express");
const app = express();

app.get("/", (req, res) => {
   //console.dir(req); // The incoming request
   res.send("<h1>Home Page</h1>"); // Response
});

// URL Parameter
// Catches the request of the route specified and sends a response to that request
app.get("/user/:id", (req, res) => {
   res.send(`The requested ID was: ${req.params.id}`);
});

// Query String
// localhost:3000/search?querystring1&querystring2
app.get("/search", (req, res) => {
   console.log(req.query);
   res.send();
});

// app.get("*", (req, res) => {}); -> handles all get requests

// Catches all the requests that are not cought before and sends a response
app.use("/", (req, res) => {
   //console.dir(req); // The incoming request
   res.status(404).send("<h1>404 - Not Found</h1>"); // Response
});

// Creates a server that is listening on port 3000
app.listen(3000, () => {
   console.log("Listening on port 3000");
});