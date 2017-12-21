let api = require('./index.js');

api.getUserLatestPosts('ev').then((data) => {
    //console.log(data);
    console.log("Successful Test")
}).catch((err) => {
    console.log(`Test failed: ${err.message}`);
    console.log(err.stack);
    console.log("If you got \"Failed to load page, status code: 404\" error, make sure to check the user exists")
});

