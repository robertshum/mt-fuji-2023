### Caching

#### Storing images in src/lib vs static folders

Any files stored under src, VITE will mark images with a hash which allows to cache it for a very long time in the browser.  Static does not have the hash added.

https://stackoverflow.com/questions/71789244/where-to-put-images-with-sveltekit