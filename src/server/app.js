const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.use('/api', routes);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));

module.exports = app;
