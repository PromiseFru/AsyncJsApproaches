const http = require("http");
const getPosts = require("./fetch")
const port = 3000;
var url = "https://jsonplaceholder.typicode.com/posts";

// request listener
function requestListener(req, res){
    res.writeHead(200);
    getPosts(url);
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

function myTest(post) {
    console.log(post.length);
}
