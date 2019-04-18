# urlShortener
App to provide shortened urls and redirect users

Nvm use

npm run serve

npm run node

npm run gulp build

Assumptions made include:
- data does not need to be persistent. Currently a local store is being used to simulate a database. The next step would include adding a persistent layer/dB to store the data. NoSql would be a good choice as it is more scalable with the current data.

Next steps:
- adding the data to database
- adding unit test.
     - Jasmine is a Behavior Driven Development(BDD) testing framework for JavaScript. Because it does not rely on the browser/dom it makes a good option to test node.js.

The app is built using node.js for the backend. The front end is created using js/HTML/sass. The source files for the front end are located in the client folder and are minified through gulp. The backend handles API calls to add/get URLs from a local store, as well as redirect users to the full site when a shortened URL is used.