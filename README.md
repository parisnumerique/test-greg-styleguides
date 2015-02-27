# Paris Living Style Guide

## Getting started

Just install [Harp](http://harpjs.com):

    npm install -g harp

## Development mode

    harp server

This launches a local server at http://localhost:9000 with auto reload of the files.


## Build a static version

    harp compile


## Include the styleguide files in your project

For now, you have to copy manually the files from `build`.

Don't forget to add the fonts and compiled css and js files to your page.

    build/fonts/*
    build/stylesheets/styleguide.css
    build/javascript/styleguide.js
