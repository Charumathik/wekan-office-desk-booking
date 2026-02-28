# Wekan Office Hub Constitution

## 1. Tech Stack Rules

Frontend:
- React with Functional Components only
- React Hooks (useState, useContext)
- NO Class Components

Styling:
- Tailwind CSS only

State Management:
- React useState and useContext
- Redux is strictly forbidden

Backend:
- Python FastAPI

Database:
- In-memory storage only (no external database)

---

## 2. Architectural Rules

Separation of Concerns:
- The frontend must NEVER call third-party APIs directly.
- All external API calls must go through the backend.

Security:
- API keys must be stored in a `.env` file.
- Secrets must never be committed to GitHub.

Async Operations:
- All API calls must use async/await.

---

## 3. Development Workflow

Spec-First Development:
- No code should be written before updating `.specify/specs.md`.

Atomic Tasks:
- All development must be broken into small, testable tasks.

Traceability:
- Each task must have one commit in GitHub.

Pull Request Rule:
- Code changes without spec updates will be rejected.