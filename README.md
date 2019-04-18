# urlShortener
App to provide shortened urls and redirect users


# Usage
Run the following command to set the node version. Node 11.0.0 was used during development:
`nvm use`

Run this command to build client files and start node server on port 9000:
`npm run serve`

Run this command to start only the node server without building files:
`npm run node`

Run this command to build client files only:
`npm run gulp build`

The app is built using node.js for the backend. The front end is created using js/HTML/sass. The source files for the front end are located in the client folder and are minified through gulp. The front end handles provides an input for the user to enter valid url and displays shortened url or error message. The backend handles API calls to add/get URLs from a local store, as well as redirect users to the full site when a shortened URL is used.

Assumptions made include:
- data does not need to be persistent. Currently a local store is being used to simulate a database. The next step would include adding a persistent layer/dB to store the data. NoSql would be a good choice as it is more scalable with the current data. Benefits of using a NoSQL database include :
     - "Large volumes of structured, semi-structured, and unstructured data."
     - "Agile sprints, quick iteration, and frequent code pushes."
     - "Object-oriented programming that is easy to use and flexible."
     - "Efficient, scale-out architecture instead of expensive, monolithic architecture."
     * https://www.mongodb.com/scale/advantages-of-nosql

Next steps:
- adding the data to database
- adding unit test.
     - Jasmine is a Behavior Driven Development(BDD) testing framework for JavaScript. Because it does not rely on the browser/dom it makes a good option to test node.js.
