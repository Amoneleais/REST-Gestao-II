const express = require('express');
const app = express();
const routes = require('./src/routes/router');

const PORT = 3000;

app.use('/api', routes);

app.listen(PORT, () => {
    console.log('running on http://localhost:' + PORT)
});