const express = require('express');
const app = express();
const routes = require('./src/routes/router');
const bodyParser = require('body-parser');
const prometheusMiddleware = require('express-prometheus-middleware');

const PORT = 3001;

// Middleware do Prometheus
app.use(prometheusMiddleware({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    requestCountMetricName: 'http_requests_total',
    extraMetricsLabels: ['route'],
}));

app.use(bodyParser.json());

// Middleware para adicionar o rótulo 'route' às métricas
app.use((req, res, next) => {
    if (req.url.startsWith('/api/games/')) {
        req.metrics = {
            ...req.metrics,
            route: '/api/games/'
        };
    }
    next();
});

app.use('/api', routes);

const server = app.listen(PORT, () => {
    console.log('running on http://localhost:' + PORT);
});

module.exports = { app, server };