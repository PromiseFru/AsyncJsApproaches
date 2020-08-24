const fetch = require('node-fetch');

var getPosts = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(post => console.log(post))
        .catch(err => console.log(err))
}

module.exports = getPosts;