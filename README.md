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

## System Architecture

```mermaid
flowchart TD
    A[Client / API Consumer] --> B[Image Upload API]
    B --> C[Image Session Service]
    C --> D[Design Pattern Engine]
    D --> E[Recommendation Engine]

    E --> F[Inventory-first Sourcing]
    E --> G[Manufacturer Fallback]

    F --> H[Pricing Engine]
    G --> H[Pricing Engine]

    H --> I[Intended Cart Service]
    I --> J[Intent Submission]
