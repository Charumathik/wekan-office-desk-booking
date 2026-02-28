# Wekan Office Hub Specifications

## 1. Desk Booking (Event Driven Requirement)

WHEN a user selects a desk and clicks the "Book Desk" button  
THEN the system SHALL reserve the selected desk for that user for the selected day.

---

## 2. Maintenance Block (Unwanted Behavior)

IF a desk is marked as "Under Maintenance"  
THEN the system SHALL prevent the desk from being booked  
AND the system SHALL display a warning message to the user.

---

## 3. Amenity Filtering (Event Driven Requirement)

WHEN a user selects the filter "Standing Desk"  
THEN the system SHALL display only desks that support standing workstations.

WHEN a user selects the filter "Double Monitors"  
THEN the system SHALL display only desks equipped with double monitors.

---

## 4. Occupancy Status (State Driven Requirement)

WHILE a desk is currently booked for the day  
THE system SHALL display the desk status as "Occupied".

WHILE a desk is not booked  
THE system SHALL display the desk status as "Available".