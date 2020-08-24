const http = require("http");
const port = 3000;

// request listener
function requestListener(req, res){
    res.writeHead(200);
    res.end("hello world");
}

try {
    // create sever
    var server = http.createServer(requestListener);
    // listen for request on port
    server.listen(port);
    console.log(`Server started on port ${port}`);
}catch(err) {
    console.log(Error(err));
}
