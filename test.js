let api = require('./index.js');


api.getUserLatestPosts('nikolaevra', 1).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

