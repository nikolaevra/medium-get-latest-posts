let htmlparser = require("htmlparser2");

exports.getUserLatestPosts = function(username) {
    let url = `https://medium.com/@${username}/latest`;

    return new Promise((resolve, reject) => {
        getPosts(url).then((data) => {
            let handler = new htmlparser.DomHandler(function (error, dom) {
                if (error) {
                    reject(error);
                } else {
                    let latestsPosts = [];
                    let stories = dom[1].children[1].children[1].children[1].children[0].children[5].children;

                    for (let i = 0; i < stories.length; i++) {
                        let results = {};

                        if (stories[i].attribs.class === "streamItem streamItem--postPreview js-streamItem") {
                            let post = stories[i].children[0].children[0].children[1].children[0].children[0].children[0].children[1].children[0].children;

                            results.url = null;
                            results.img = null;
                            results.title = null;
                            results.subtitle = null;

                            results.url = stories[i].children[0].children[0].children[1].children[0].attribs.href.split('?')[0];

                            if (post[0]) {
                                if (post[0].attribs['name'] === 'previewImage') {
                                    results.img = post[0].children[0].children[1].attribs['src'];
                                } else if (post[0].children[0].data) {
                                    results.title = post[0].children[0].data;
                                }
                            }

                            if (post[1]) {
                                if (post[1].name === 'h3') {
                                    results.title = post[1].children[0].data;
                                } else {
                                    results.subtitle = post[1].children[0].data;
                                }
                            }

                            if (post[2] && post[2].children[0].data) {
                                results.subtitle = post[2].children[0].data;
                            }
                        }
                        latestsPosts.push(results);
                    }
                    resolve(latestsPosts);
                }
            });

            let parser = new htmlparser.Parser(handler);
            parser.write(data);
            parser.end();
        }).catch((err) => {
            reject(err);
        });
    });

    function getPosts(url) {
        return new Promise((resolve, reject) => {
            const lib = url.startsWith('https') ? require('https') : require('http');
            const request = lib.get(url, (response) => {
                if (response.statusCode < 200 || response.statusCode > 299) {
                    reject(new Error('Failed to load page, status code: ' + response.statusCode));
                }
                const body = [];
                response.on('data', (chunk) => body.push(chunk));
                response.on('end', () => resolve(body.join('')));
            });
            request.on('error', (err) => reject(err))
        })
    }
};