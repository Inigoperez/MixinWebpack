const mix = require("laravel-mix");

mix.js('src/index.js', 'dist')
   .sass('src/index.scss', 'dist')
   .setPublicPath('dist');
