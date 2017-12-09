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

var PORT1 = 7000;
var PORT2 = 7500;


function goodRequest (req, resp) {
    resp.end("Way to go! " + req.url);
};

var server = http.createServer(goodRequest);

server.listen(PORT1,function() {
    console.log("listening on: http://localhost:" + PORT1 )
});

function badRequest (req, resp) {
    resp.end("you suck! " + req.url);
};

var badServer = http.createServer(badRequest);

badServer.listen(PORT2,function() {
    console.log("listening on: http://localhost:" + PORT2 )
});