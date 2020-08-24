var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getPosts(url, callback){
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open('GET', url);

    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(null, this.responseText);
        }
    }
    
    try {
        xhr.send()
    }catch(err){
        callback(err, null);
    }
}

module.exports = getPosts;