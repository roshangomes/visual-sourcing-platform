# Visual Sourcing Platform (B2B Jewellery)

## Overview

The **Visual Sourcing Platform** is a backend-first prototype that converts a buyer’s visual inspiration into **commercially viable jewellery recommendations**, while maintaining:

- Inventory-first sourcing
- Platform-controlled pricing
- Supplier abstraction
- Assisted commerce via intent-based cart (no checkout)

This project implements the **core business logic** defined in the BRD and demonstrates a complete end-to-end flow via APIs.

---

## Core Features

### ✅ Image Upload & Image Session
- Accepts a reference image
- Creates an image session
- Extracts structured design attributes (mocked)
- Avoids repeated image processing

### ✅ Design Pattern Engine
- Generates one primary design pattern
- Generates multiple alternative patterns
- Enables reusable design intelligence

### ✅ Recommendation Engine
- Inventory-first sourcing logic
- Manufacturer fallback if inventory is unavailable
- Platform-controlled pricing (buffers + margin)
- One primary + multiple alternatives
- Supplier details abstracted from user

### ✅ Intended Cart (Intent-Based)
- Add recommended items
- Specify quantities
- Submit intent to buy
- No checkout or payment (as per BRD)

---
## Technology Stack

| Layer | Technology |
|------|------------|
| Runtime | Node.js (v25) |
| Language | TypeScript (ESM) |
| Framework | Express.js |
| File Upload | Multer |
| Dev Runner | tsx |
| Storage | In-memory (MVP) |

> No database or frontend is used intentionally to focus on business logic validation.

---

## API Endpoints

### Health Check
```http
GET /health
Image Upload
POST /api/images/upload
Form Data
image: <file>
Response
{
  "success": true,
  "data": {
    "imageSessionId": "uuid",
    "filePath": "uploads/temp/...",
    "attributes": {
      "category": "RING",
      "shape": "ROUND",
      "stoneDensity": "MEDIUM",
      "metalVisibility": "HIGH",
      "finish": "POLISHED"
    },
    "status": "COMPLETED",
    "createdAt": "timestamp"
  }
}
Generate Recommendations
POST /api/recommendations
Body
{
  "attributes": {
    "category": "RING",
    "shape": "ROUND",
    "stoneDensity": "MEDIUM",
    "metalVisibility": "HIGH",
    "finish": "POLISHED"
  }
}
Response
1 primary recommendation (inventory-first)
Multiple alternatives (manufacturer fallback)
View Cart
GET /api/cart
Add Item to Cart
POST /api/cart/add
Body
{
  "recommendation": {
    "type": "PRIMARY",
    "productId": "INV_RING_001",
    "pricing": { "minPrice": 11600, "maxPrice": 11600 },
    "moq": 10,
    "leadTime": "7 days"
  },
  "quantity": 20
}
Submit Cart Intent
POST /api/cart/submit
Running the Project Locally
Prerequisites
Node.js v20+
npm
Setup
git clone <repository-url>
cd visual-sourcing-platform/backend
npm install
npm run dev
Server runs at:
http://localhost:3000
Validation & Testing
The system can be validated using:
curl commands
Postman requests
End-to-end API flow testing
No frontend UI is required to demonstrate correctness.
Scope Decisions
Implemented
Core sourcing logic
External user journey
Inventory prioritization
Platform pricing logic
Intended cart flow
Intentionally Deferred
Database persistence
Authentication & RBAC
Internal dashboards
Quotations
Notifications
External supplier integrations
These are acknowledged and documented as future enhancements.
Future Enhancements
The architecture supports:
Database integration
Role-based access control
Internal sales dashboards
Quotation workflows
Supplier integrations
Frontend UI
No core logic refactoring would be required.
Conclusion
This project delivers a working MVP aligned with the BRD’s core objectives.
It validates the visual-to-recommendation workflow while maintaining clean system boundaries and extensibility for future phases.