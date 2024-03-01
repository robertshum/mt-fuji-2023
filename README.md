# Mt. Fuji 2023
Front-end app with 3D interactive experiences to illustrate my experience climbing Mt. Fuji on August 23rd, 2023.

# Live App

https://robertshum.github.io/mt-fuji-2023/

# Screenshots

![image](https://github.com/robertshum/mt-fuji-2023/blob/feature/touchups/media/frontpage.png)


# How it Works

Sveltekit/Svelte is responsible for the web app, which consists of the layout and display of information.  Needle.Tools (Unity/3JS) is responsible for the 3D interactive assets (there is much more going on under the hood and you can find out more here: https://engine.needle.tools/docs/).  

Both applications talk to each other via event handlers.  

# Features

* Navigate either by the main menu or the flags in the interactive screen.
* Unity particle effects to represent weather based on the segment of the hike, as how I experienced it when I went.
* Changes to main branch gets deployed w/ Github Actions.
* See what it's like hiking Mt. Fuji.

# Limitations

The app at the moment does not have responsive UI/UX, and will not work well in small format devices like smartphones.


# Tech Stack  

Unity Engine - https://unity.com/

Needle.Tools - https://needle.tools/

[![image](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00)](https://kit.svelte.dev/)

[![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

DaisyUI - https://daisyui.com/

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Github Action Build Status

[![Build and Deploy to Pages](https://github.com/robertshum/mt-fuji-2023/actions/workflows/deploy.yml/badge.svg)](https://github.com/robertshum/mt-fuji-2023/actions/workflows/deploy.yml)

# Attributions:

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