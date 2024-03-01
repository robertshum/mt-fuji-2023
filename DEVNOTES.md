### Caching

#### Storing images in src/lib vs static folders

Any files stored under src, VITE will mark images with a hash which allows to cache it for a very long time in the browser.  Static does not have the hash added.

https://stackoverflow.com/questions/71789244/where-to-put-images-with-sveltekit


### Root Elements when stacking HTML Figures

For some reason if I stack custom components (See CardImage) where the root element is a HTML Figure, it hides the last figure.  (The figure shows up on the DOM but the height is set to 0).  It might be sveltekit's way of conditional rendering of certain elements on the dom.

Example: if I have 3 card images, the first 2 will show.  If I have 4, it shows the first 3.

A 'fix' is use a div, or any other root element, to wrap around the Figure.

### Attributions:

Tori Gate Model - "Torii (Low Poly)" (https://skfb.ly/oPALX) by game_travel is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

Mt. Fuji / Fujisan (Japan)
by taisukef (https://www.thingiverse.com/taisukef)
is licensed under the Creative Commons - Attribution license (http://creativecommons.org/licenses/by/4.0/)

Cartoon FX
Asset Store
https://assetstore.unity.com/packages/vfx/particles/epic-toon-fx-57772

Simple Town
Asset Store
https://assetstore.unity.com/packages/3d/environments/urban/simple-town-cartoon-assets-43500

Low Poly Plants Pack from Creative Trio (https://creativetrio.art/2022/08/29/stylized-low-poly-plants-pack-02/)
is licensed under the Creative Commons - Attribution license (http://creativecommons.org/licenses/by/4.0/)



