'use strict';

const express = require('express');

const healthRouter = express.Router();

/**
 * Health check endpoint: indicates the service process is up.
 */
healthRouter.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

/**
 * Readiness check endpoint: indicates the service is ready to receive traffic.
 * No external dependencies are required for startup in this scaffold, so it's always ready.
 */
healthRouter.get('/readyz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = { healthRouter };
