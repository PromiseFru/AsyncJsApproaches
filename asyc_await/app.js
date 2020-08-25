const http = require("http");
const getPosts = require("./asyn_await_fetch");
const port = 3000;
var url = "https://jsonplaceholder.typicode.com/posts";

// requestListener
function requestListener(req, res) {
    res.writeHead(200);
    getPosts(url).then(myTest);
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

function myTest(post) {
    console.log(post);
}
