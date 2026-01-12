'use strict';

/**
 * Placeholder "test" runner.
 * Exits successfully so CI/preview won't fail when `npm test` is invoked.
 */
// PUBLIC_INTERFACE
function main() {
  /** Entry point for placeholder tests. */
  console.log('No tests implemented yet. (placeholder)');
  process.exit(0);
}

if (require.main === module) {
  main();
}

module.exports = { main };
