const fetch = require('node-fetch');

var getPosts = (url) => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
}

module.exports = getPosts;