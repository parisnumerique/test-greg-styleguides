# Paris Living Style Guide

## Getting started

Install [Harp](http://harpjs.com):

    `npm install -g harp`

And Browserify

    `npm install -g browserify watchify`

And browser-sync (*)

    `npm install -g browser-sync`

(*) You may not need Browser-sync, it can be a bit complicated to install on windows (http://www.browsersync.io/docs/#installation) and is only needed if you want your pages to auto-reload on code change.

## Development mode

    `npm start`

This launches a local server at http://localhost:9000
The server is proxied on http://localhost:3000 by browser-sync with the auto reload on code changes.

## Build a static version

    `npm run compile`

## Use the build in another project

    Run `npm link` in this folder
    Run `npm link paris-styleguide` in the other project

You'll get the paris-styleguide project symbolicaly linked in the other project node_modules
If it's an express one you can do something like
app.set('views', [app.get('views'), path.join(__dirname, 'node_modules', 'paris-styleguide', 'build', 'jade') ]);
to be able to render jade templates coming from the styleguide. \o/


