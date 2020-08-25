const fetch = require("node-fetch")

async function getPosts(url) {
    try {
        const res = await fetch(url);
        return res.json()
    }catch(err) {
        console.log(Error(err));
    }
}

module.exports = getPosts;