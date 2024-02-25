### Caching

#### Storing images in src/lib vs static folders

Any files stored under src, VITE will mark images with a hash which allows to cache it for a very long time in the browser.  Static does not have the hash added.

https://stackoverflow.com/questions/71789244/where-to-put-images-with-sveltekit


### Root Elements when stacking HTML Figures

For some reason if I stack custom components (See CardImage) where the root element is a HTML Figure, it hides the last figure.  (The figure shows up on the DOM but the height is set to 0).  It might be sveltekit's way of conditional rendering of certain elements on the dom.

Example: if I have 3 card images, the first 2 will show.  If I have 4, it shows the first 3.

A 'fix' is use a div, or any other root element, to wrap around the Figure.