const express = require('express');
const app = express();
const routes = require('./src/routes/router');
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', routes);

const server = app.listen(PORT, () => {
    console.log('running on http://localhost:' + PORT)
});

module.exports = { app, server };
