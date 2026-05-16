Campus Notifications System Design

Overview

This project is a frontend-based campus notification system developed using React, TypeScript and Material UI. The application fetches notifications from the given API and displays them in a structured and prioritized way.


Tech Stack:
React
TypeScript
Material UI
Axios
Vite


Project Structure

src/
    api/
    components/
    types/
    utils/
    App.tsx


Notification Fetching:
Notifications are fetched using Axios with Bearer token authentication.

API Used:
GET /evaluation-service/notifications

The fetched notifications are stored in React state and rendered dynamically on screen.

Priority Logic:
Notifications are prioritized based on their type.

Priority Order:
Placement
Result
Event
If two notifications have the same priority, the latest notification is shown first using timestamp comparison.

Logging Middleware:
A reusable logging middleware was implemented using the provided logging API.

The middleware logs successful API calls,failed API requests,frontend actions

Logging API:
POST /evaluation-service/logs

The logging function can be reused across components and API files.

UI Design:
Material UI components are used to build the interface.

Features implemented notification cards,filtering buttons,top priority notifications section,responsive layout
Different colors are used for different notification types for better readability.

Filtering:
Users can filter notifications using:
- All
- Placement
- Result
- Event

Filtering is implemented dynamically using React state.

Scalability:
The project follows a modular structure.
Separate folders are maintained for:
- API handling
- reusable components
- utility functions
- types

This improves maintainability and makes future enhancements easier.

Conclusion:
The application successfully implements notification prioritization
- API integration
- logging middleware
- filtering functionality
- reusable frontend architecture