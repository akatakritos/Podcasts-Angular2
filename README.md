# Podcasts - Angular 2

My first Angular 2 app using a .NET backend.

Its the same as https://github.com/akatakritos/Podcasts except using Angular 2
instead of React.

Sometimes I see a post about a random podcast episode I'd like to listen to
without subscribing to the whole feed. This site generates a custom feed of adhoc
episodes. I just need to copy the MP3 download URL and paste it in. The server
regenerates an RSS feed whenever my Podcast client refreshes.

Future enhancements might load the name of the episode and description from the
media file id3 tags, or try to parse the episode page from the podcast's website.

`statics` contains the front end Angular 2 code.

In development mode and when `UseWebpackDevServer` is `true` in web.config,
the server links to the webpack dev server for FE assets. This way live reloading
is supported. Run `npm start` inside the `statics` folderto start the server.

In Production, assets are server from `assets` folder. Run `npm run build` in
`statics` to compile assets and copy them to that folder.

