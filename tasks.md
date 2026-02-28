# Task Breakdown

## T001 Initialize Project
- Create GitHub repository
- Setup base project folders
- Add README

---

## T002 Add Constitution
- Define project rules
- Define tech stack
- Define architectural constraints

---

## T003 Write Specifications
- Create .specify/specs.md
- Convert business requirements into EARS format

---

## T004 Implementation Plan
- Define architecture
- Define backend responsibilities
- Define frontend responsibilities

---

## T005 Backend Setup
- Install FastAPI
- Create backend folder structure
- Create main FastAPI server

---

## T006 Desk Data Model
- Define desk structure
- Include properties:
  - id
  - status
  - amenities
  - maintenance flag

---

## T007 API: Get Desks
- Create GET /desks endpoint
- Return desk data

---

## T008 API: Book Desk
- Create POST /book-desk endpoint
- Update desk status

---

## T009 Maintenance Validation
- Prevent booking desks under maintenance
- Return warning message

---

## T010 Frontend Setup
- Create React app
- Install Tailwind CSS

---

## T011 Desk Dashboard UI
- Display desks in grid
- Show Available / Occupied states

---

## T012 Desk Booking UI
- Allow users to select desks
- Send booking request to backend

---

## T013 Amenity Filters
- Add filters for:
  - Standing desks
  - Double monitor desks

---

## T014 Occupancy Visualization
- Display desk status colors

---

## T015 API Integration
- Connect frontend to backend APIs

---

## T016 Final Testing
- Verify booking flow
- Verify maintenance restrictions
- Verify filtering works