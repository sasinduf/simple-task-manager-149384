'use strict';

/**
 * Parse an integer environment variable safely.
 * Falls back to defaultValue if missing/invalid.
 */
function parseIntEnv(value, defaultValue) {
  const n = Number.parseInt(String(value ?? ''), 10);
  return Number.isFinite(n) ? n : defaultValue;
}

// PUBLIC_INTERFACE
function getConfig() {
  /** Returns runtime configuration derived from environment variables. */
  return {
    // Preview expects port 3001; allow override via PORT.
    port: parseIntEnv(process.env.PORT, 3001),
    // Bind to all interfaces so container preview can reach it.
    host: '0.0.0.0'
  };
}

module.exports = { getConfig };
