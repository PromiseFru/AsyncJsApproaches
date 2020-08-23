const http = require('http');
const port = 3000;

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end();
}

try {
    const server = http.createServer(requestListener);
    server.listen(port);
    console.log(`Server started on port ${port}`);
}catch(err){
    console.log(Error(err));
}
