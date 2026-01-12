'use strict';

const { healthRouter } = require('./health');

/**
 * Register all application routes onto the Express app instance.
 * @param {import('express').Express} app
 */
// PUBLIC_INTERFACE
function registerRoutes(app) {
  /** Registers all HTTP routes for the service. */
  app.use('/', healthRouter);
}

module.exports = { registerRoutes };
