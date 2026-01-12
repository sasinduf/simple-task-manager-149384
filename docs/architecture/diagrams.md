# Architecture Diagrams

## Purpose

This page indexes the Mermaid diagrams embedded throughout the architecture documentation. The diagrams are intended to make the proposed system shape easier to understand while the repository remains a scaffold without implementation code.

## Diagram index

### System/context view

The system/context view shows the client interacting with the Node.js backend, plus the planned (future) data store.

- See: [Architecture Overview - System/Context diagram](overview.md#systemcontext-diagram)

### Container/module (monolith decomposition) view

The container/module view decomposes the monolithic Node.js backend into internal layers (API, services, data access) and cross-cutting concerns.

- See: [Architecture Overview - Container/Module diagram](overview.md#containermodule-diagram-monolith-decomposition)

### Sequence diagrams

These diagrams show the intended runtime interaction for key flows.

- See: [REST API Draft - Sequence diagram: Create Task](api.md#sequence-diagram-create-task-post-tasks)
- See: [REST API Draft - Sequence diagram: List Tasks](api.md#sequence-diagram-list-tasks-get-tasks)

### Data model (ER) diagram

This diagram reflects the current conceptual data model draft for Task and the optional User entity.

- See: [Data Model Draft - ER diagram](data-model.md#er-diagram)
