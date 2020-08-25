const http = require("http");
const port = 3000;

// requestListener
function requestListener(req, res) {
    res.writeHead(200);
    res.end("Hello world");
}

try {
    // createServer
    var server = http.createServer(requestListener);
    // listen for request
    server.listen(port)

    console.log(`Server started on port ${port}`);
}catch(err) {
    console.log(Error(err));
}
