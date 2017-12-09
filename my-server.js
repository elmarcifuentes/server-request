// var http = require("http");

// var PORT = 8080;

// function handleRequest (req, resp) {
//     resp.end("woo we made a server: " + req.url);
// };

// var server = http.createServer(handleRequest);

// server.listen(PORT,function() {
//     console.log("listening on: http://localhost:" + PORT )
// });

var http = require("http");

var PORT = 7000;

function handleRequest (req, resp) {
    resp.end("Way to go! " + req.url);
};

var server = http.createServer(handleRequest);

server.listen(PORT,function() {
    console.log("listening on: http://localhost:" + PORT )
});