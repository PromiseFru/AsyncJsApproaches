var getPost = require('./ajax');
const http = require('http');
const port = 3000;
var url = "https://jsonplaceholder.typicode.com/posts";

const requestListener = function(req, res) {
    res.writeHead(200); 
    getPost(url, myTest);
    res.end();
}

try {
    const server = http.createServer(requestListener);
    server.listen(port);
    console.log(`Server started on port ${port}`);
}catch(err){
    console.log(Error(err));
}

var myTest = async function(err, posts){
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
}