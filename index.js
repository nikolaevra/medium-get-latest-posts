const request = require('request');

exports.getUserLatestPosts = function(username) {
    let url = `https://medium.com/@${username}/latest`;

    return new Promise((resolve, reject) => {
        getPosts2(url).then((data) => {
            let results = [];
            const parsed = JSON.parse(data).payload;
            const posts = parsed.references.Post;

            Object.keys(posts).forEach((key) => {
                let post = posts[key];
                results.push({
                    url: `https://medium.com/the-atlantic/${post.uniqueSlug}`,
                    img: `https://cdn-images-1.medium.com/max/500/${post.virtuals.previewImage.imageId}`,
                    title: post.title,
                    subtitle: post.virtuals.subtitle,
                    tags: post.virtuals.tags
                });
            });

            resolve(results);
        }).catch((err) => {
            reject(err);
        });
    });
};

exports.getPublisherLatestPosts = function(username) {
    let url = `https://medium.com/${username}/latest`;

    return new Promise((resolve, reject) => {
        getPosts2(url).then((data) => {
            let results = [];
            const parsed = JSON.parse(data).payload;
            const posts = parsed.posts;

            for (let i = 0; i < posts.length; i++) {
                results.push({
                    url: `https://medium.com/the-atlantic/${posts[i].uniqueSlug}`,
                    img: `https://cdn-images-1.medium.com/max/500/${posts[i].virtuals.previewImage.imageId}`,
                    title: posts[i].title,
                    subtitle: posts[i].virtuals.subtitle,
                    tags: posts[i].virtuals.tags
                });
            }

            resolve(results);
        }).catch((err) => {
            reject(err);
        });
    });
};

function getPosts2(url) {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            url: url,
            json: true
        };

        request(options, (err, res, body) => {
            if (err) {
                reject(err);
            } else if (res.statusCode === 200) {
                resolve(body.split('\</x>')[1]);
            }
        })
    })
}