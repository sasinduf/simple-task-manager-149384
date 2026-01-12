'use strict';

const express = require('express');

const { getConfig } = require('./config/env');
const { registerRoutes } = require('./routes');

/**
 * Create and configure the Express application.
 * Kept as a function to make future testing/extension easier.
 */
function createApp() {
  const app = express();

  // Basic middleware (built-in)
  app.use(express.json());

  // Routes
  registerRoutes(app);

  // Basic 404 handler
  app.use((req, res) => {
    res.status(404).json({ error: 'not_found' });
  });

  // Basic error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // Avoid leaking details in production; keep minimal here.
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'internal_server_error' });
  });

  return app;
}

/**
 * Start the HTTP server.
 */
function start() {
  const config = getConfig();
  const app = createApp();

  app.listen(config.port, config.host, () => {
    console.log(`[server] listening on http://${config.host}:${config.port}`);
  });
}

// Start only when run directly via `node src/server.js`
if (require.main === module) {
  start();
}

module.exports = { createApp };
