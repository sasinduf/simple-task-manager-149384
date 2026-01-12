# Runtime, Dependencies, and Configuration

## Status and assumptions

The repository currently has no Node.js application code, package.json, or environment configuration. This document proposes defaults so that an eventual implementation has a clear operational shape.

The intent is a single monolithic Node.js process that exposes an HTTP API and persists tasks to a database.

## Runtime model

The service should start an HTTP server on a configurable port. It should create a single database connection pool on startup and reuse it across requests. It should implement graceful shutdown by stopping the HTTP listener, waiting for in-flight requests, and closing database connections.

## Proposed dependencies (implementation choices)

The following dependency categories are recommended. Exact libraries can be chosen during implementation:

An HTTP server framework (commonly Express or Fastify). A request validation library (commonly Zod or Joi). A database access layer (either an ORM such as Prisma or a query builder such as Knex, or a direct driver such as pg). A logging library for structured logs. A metrics library and endpoint to export metrics.

If authentication is included, a JWT library and password hashing library may be needed.

## Configuration strategy

Configuration should be environment-variable driven, with safe defaults for local development. Configuration should be validated at startup so misconfigurations fail fast.

## Proposed environment variables

The following environment variables are proposed; none are currently present in the repository.

### Server

PORT: The TCP port the HTTP server listens on. Default should be 3000.

NODE_ENV: Environment name. Suggested values are development, test, and production.

LOG_LEVEL: Controls log verbosity. Suggested values are debug, info, warn, error.

### Database

DATABASE_URL: Connection string for the primary database. For PostgreSQL this would be a standard postgres URL. For SQLite this could be a file path.

DB_POOL_SIZE: Optional, controls maximum connections in the pool.

### Authentication (optional)

AUTH_ENABLED: Enables or disables authentication. Default should be false for early development unless the project requires auth immediately.

JWT_SECRET: Secret used to sign tokens. Must be set in production if auth is enabled.

JWT_ISSUER and JWT_AUDIENCE: Optional JWT claims for validation.

### Observability

REQUEST_LOGGING: Enables request log middleware. Default should be true.

METRICS_ENABLED: Enables metrics endpoint. Default should be true.

## Deployment considerations

The service should be deployable as:

A local Node.js process for development, and a container for production-like environments.

A container deployment should set PORT, DATABASE_URL, and secrets via environment variables. A readiness endpoint should fail if the database cannot be reached. A liveness endpoint should remain lightweight and not depend on external services.

## Versioning and compatibility

If the API evolves, versioning can be introduced via a URL prefix such as /v1. The initial scaffold can omit versioning for simplicity, but it should be easy to add later by grouping routes under a router prefix.
