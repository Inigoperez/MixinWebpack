const mix = require("laravel-mix");
mix
  .sass("src/index.scss", "distMix")
  .js("src/index.js", "distMix")
  .sourceMaps()
  .copy("src/index.html", "distMix")
  .extract(["leaflet"]);