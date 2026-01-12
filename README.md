# simple-task-manager-149384

Minimal Node.js backend scaffold that starts successfully in preview and exposes basic health endpoints.

## Requirements
- Node.js 18+

## Install
```bash
npm install
```

## Run (preview / production-like)
```bash
npm start
```

The server listens on:
- `0.0.0.0:${PORT}` where `PORT` defaults to `3001`.

## Run (development)
```bash
npm run dev
```

## Endpoints
- `GET /healthz` → `200 { "status": "ok" }`
- `GET /readyz` → `200 { "status": "ok" }`

## Notes
- No external services or environment variables are required to start this scaffold.
- Additional application structure is present under `src/` for future expansion:
  - `src/routes`
  - `src/services`
  - `src/repositories`
  - `src/config`
  - `src/middleware`
