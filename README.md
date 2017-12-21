# medium-get-user-posts
Get all of the latest posts made by a user. Returns a promise that resolves to user's latests posts

## Usage:
``` javascript 1.8
api.getUserLatestPosts('ev').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
```

## Output:
``` javascript 1.8
[ { url: 'https://blog.medium.com/words-still-matter-6e9163216052',
    img: null,
    title: 'Words still matter',
    subtitle: 'Five years can seem like a long time. Two presidential elections and three iPhone generations ago, things were different. And that’s when we started Medium. At the time, ' },
  { url: 'https://blog.medium.com/our-approach-to-member-only-content-cfce188261d1',
    img: null,
    title: 'Our approach to member-only content',
    subtitle: 'As a Medium member, you’ll have access to member-only stories about a range of topics and ideas that matter. While this exclusive content aspect of your subscription will start small — with the first pieces coming next week — it will become a dominant feature over…' },
  .
  .
  .
```

