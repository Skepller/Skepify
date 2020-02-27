![logo](skepify%20logo.png)
=================================================
A Spotify 3D Web Visualizer with WebGL
=================================================

![Obligatory 10mb gif](kung10mb.gif)

Spotify 3D Web Visualizer that renders the album cover and other images from the artist in 3D according to the "Now Playing" of the Spotify Account connected.

[Click here to open the online version.](https://skepller.github.io/Skepify/)

You can also control the song with your keyboard and mouse: 
- LEFT, RIGHT and SPACE keys for PREVIOUS, NEXT and PAUSE/PLAY respectively 
- Seek through the song with the mouse by clicking on the green bar.

---

The visualizer is based on an example (by Possan) of how to use the [Spotify Connect Web APIs](https://developer.spotify.com/web-api/web-api-connect-endpoint-reference/) to render the currently playing artwork in a slightly different way using WebGL. Later, the example was upgraded (by Plamere) to show more images of the artist and is in this version that Skepify is based on).

[Possan's original example](https://possan.github.io/webgl-spotify-connect-now-playing-screen-example)

[Plamere version](https://github.com/plamere/webgl-spotify-connect-now-playing-screen-example)

Skepify also uses several NodeJS libraries that have been 'Browserify-ed' and code from possan's [polyserver](https://github.com/possan/polyserver) to vectorize the album covers and images into triangle data for the renderer.

Enjoy.

---
TO-DO:

- Reacquire token after expiration
- Better UI and Menus
- Better starting screen
- Fix some buttons unintended behaviour
- Fix background bar/brightness change
- Optimizations
