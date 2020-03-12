If you are on Windows and are using any version of Node v12.11 or higher you will hit a bug with React Native when trying to ```run expo start``` in the course-rn directory:

error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class. Run CLI with --verbose flag for more details.

There are three ways this can be handled, many students seem to prefer the quicker alternative solution #1

## Solution #1 - Edit the blacklist.js file

Note - You will need to make this change to the file for every project you generate throughout the course.

Go into your project files and find the node_modules directory. Then open up the blacklist.js file in your code editor, found at the path below:

node_modules/metro-config/src/defaults/blacklist.js

Change this:
```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
to this:
```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
## Solution #2 - Downgrade Node

Completely uninstall Node from your system and install v12.10.0, using this page:

https://nodejs.org/download/release/v12.10.0/

Most Windows users will need the x64.msi download available here:

https://nodejs.org/download/release/v12.10.0/node-v12.10.0-x64.msi

After installing this specific version of Node you can continue to the next lecture "App Setup"

For those students that have already started the lecture "App Setup" and are getting the error mentioned, you'll need to perform the above steps. Then do the following:

* 1. Change into the course-rn directory

* 2. `rm -r node_modules`

* 3. `rm package-lock.json`

* 4. `npm install`

* 5. `expo start`


## Solution #3 - Use a Node Version Manager:

If you are familiar with Node version managers, this is a possible quick solution that doesn't involve changing your local version of Node.

https://github.com/coreybutler/nvm-windows

After installing, you should be able to just run this in your terminal:

nvm install 12.10.0 and then nvm use 12.10.0

Then do the following:

* 1. Change into the course-rn directory

* 2. `rm -r node_modules`

* 3. `rm package-lock.json`

* 4. `npm install`

* 5. `expo start`