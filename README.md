# medium-get-latest-posts
Get all of the latest posts made by a user. Returns a promise that resolves to latest posts, see more here https://www.npmjs.com/package/medium-get-latest-posts

## NPM installation
In your project root directory run the following
`npm i -s medium-get-latest-posts`

## Usage:
To get User's latest posts
``` javascript 1.8
const mediumGetLatestPosts = require("medium-get-latest-posts")

mediumGetLatestPosts.getUserLatestPosts('ev').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
```

To get Publisher's latest posts
``` javascript 1.8
const mediumGetLatestPosts = require("medium-get-latest-posts")

mediumGetLatestPosts.getPublisherLatestPosts('the-atlantic').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
```

## Output:
`getUserLatestPosts()` and `getPublisherLatestPosts()` produces the same output object:
``` javascript 1.8
[
  {
    "url": "https://medium.com/the-atlantic/could-facebook-be-tried-for-human-rights-abuses-c45af99e5c6",
    "img": "https://cdn-images-1.medium.com/max/500/1*jdlgrPK-Ia-BNMGzKsju3Q.png",
    "title": "Could Facebook Be Tried for Human-Rights Abuses?",
    "subtitle": "The legal path is murky.",
    "tags": [
      {
        "slug": "human-rights",
        "name": "Human Rights",
        "postCount": 10373,
        "virtuals": {
          "isFollowing": false
        },
        "metadata": {
          "followerCount": 30254,
          "postCount": 10373,
          "coverImage": {
            "id": "1*gqe0ntKM6u5FgCfuao-XGw.jpeg",
            "originalWidth": 3412,
            "originalHeight": 1919
          }
        },
        "type": "Tag"
      },
      {
        "slug": "tech",
        "name": "Tech",
        "postCount": 109615,
        "virtuals": {
          "isFollowing": false
        },
        "metadata": {
          "followerCount": 1071395,
          "postCount": 109615,
          "coverImage": {
            "id": "1*wD_pWV3M0ZnAAimGMD_i0g.jpeg",
            "originalWidth": 1280,
            "originalHeight": 960
          }
        },
        "type": "Tag"
      },
      {
        "slug": "facebook",
        "name": "Facebook",
        "postCount": 36531,
        "virtuals": {
          "isFollowing": false
        },
        "metadata": {
          "followerCount": 3343,
          "postCount": 36531,
          "coverImage": {
            "id": "1*sUzARws-E4f2ftyvFeIdNA.jpeg",
            "originalWidth": 5461,
            "originalHeight": 2389
          }
        },
        "type": "Tag"
      },
      {
        "slug": "mark-zuckerberg",
        "name": "Mark Zuckerberg",
        "postCount": 824,
        "virtuals": {
          "isFollowing": false
        },
        "metadata": {
          "followerCount": 50,
          "postCount": 824,
          "coverImage": {
            "id": "1*rFT7MX2syf7GvfaaKSgITQ.jpeg",
            "originalWidth": 2496,
            "originalHeight": 1408
          }
        },
        "type": "Tag"
      },
      {
        "slug": "technology",
        "name": "Technology",
        "postCount": 104459,
        "virtuals": {
          "isFollowing": false
        },
        "metadata": {
          "followerCount": 1832546,
          "postCount": 104459,
          "coverImage": {
            "id": "1*yH2cmH1uhoFpR7HIseOAsw.jpeg"
          }
        },
        "type": "Tag"
      }
    ]
  },
  {
    "url": "https://medium.com/the-atlantic/the-clarence-thomas-exception-ede74389d2f3",
    "img": "https://cdn-images-1.medium.com/max/500/1*99rmbhbMt-DWO73Y5q4isA.png",
    "title": "The Clarence Thomas Exception",
    "subtitle": "Anita Hill’s accusations against the Supreme Court nominee launched the first #MeToo moment 26 years ago, but the justice has faced little…",
    "tags": [
      {
        "slug": "politics",
        "name": "Politics",
        "postCount": 209604,
        "virtuals": {
          "isFollowing": false
        },
        .
      .
    .
  .
        
]
```

