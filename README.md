# Paris Living Style Guide

## Getting started

Install [Harp](http://harpjs.com):

    npm install -g harp

And Browserify

    npm install -g browserify watchify

And browser-sync (*)

    npm install -g browser-sync

(*) You may not need browser-sync, it can be a bit complicated to [install on Windows](http://www.browsersync.io/docs/#windows-users) and is only needed if you want your pages to auto-reload on code changes.

And the project dependencies (run this command from the project folder)

    npm install


## Development mode

    npm start

This launches a local server at http://localhost:9000
The server is proxied on http://localhost:3000 by browser-sync with the auto-reload on code changes.


## Compile a static version

    npm run compile


## Use the build in another project

    npm run build

Run `npm link` in this folder
Run `npm link paris-styleguide` in the other project

You'll get the paris-styleguide project symbolically linked in the other project `node_modules`.

If it's an Express project you can do something like:

    app.set('views', [app.get('views'), path.join(__dirname, 'node_modules', 'paris-styleguide', 'build', 'jade') ]);

to be able to render Jade templates coming from the styleguide. \o/
