![logo](skepify%20logo.png)
=================================================
A Spotify 3D Web Visualizer with WebGL
=================================================

![Obligatory 10mb gif](kung10mb.gif)

Spotify 3D Web Visualizer that renders the album cover and other images from the artist in 3D according to the "Now Playing" of the Spotify Account.

[Click here to open the online version.](https://skepller.github.io/Skepify/)

You can control the song with your keyborad. LEFT, RIGHT and SPACE for PREVIOUS, NEXT and PAUSE/PLAY respectively.

---

The visualizer is based on an example by Possum of how to use the [Spotify Connect Web APIs](https://developer.spotify.com/web-api/web-api-connect-endpoint-reference/) to render the currently playing artwork in a slightly different way using WebGL. Later the example was upgraded by Plamere to show more images of the artist and is in this version that Skepify is based on).

[Possan's original example](https://possan.github.io/webgl-spotify-connect-now-playing-screen-example)

[Plamere version](https://github.com/plamere/webgl-spotify-connect-now-playing-screen-example)

Skepify also uses several Browserify-ed NodeJS libraries and code from possan's [polyserver](https://github.com/possan/polyserver) to vectorize the album covers and images into triangle data for the renderer.

Enjoy.
