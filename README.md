# Multi-Tenant Outreach Platform

This is a multi-tenant outreach management platform comprising two primary portals:

1. **Admin Portal** – for platform administrators to manage workspaces and workspace users.
2. **OutreachHub Portal** – for workspace users to manage contacts, message templates, campaigns, and view analytics.

---

## 🛠 Features

### 🔐 Admin Portal
- **Access**: Only for admin users
- **Modules**:
  - **Authentication**: Login/Logout
  - **Workspaces**:
    - Create, list, update, view, delete workspaces
    - Manage workspace users (CRUD)

### 📣 OutreachHub Portal
- **Access**: Only for workspace users (Editor or Viewer role)
- **User Roles**:
  - **Editor**: Full access (CRUD)
  - **Viewer**: Read-only access

- **Modules**:
  - **Authentication**: Login/Logout
  - **Home Dashboard**:
    - Workspace-level analytics:
      - Campaigns per day
      - Messages sent per type per day
      - Contacts reached per day
    - Tables:
      - Recent 5 campaigns with targeted contact tags
      - Top 5 tags with the highest number of contacts
  - **Contacts**:
    - CRUD operations
    - Tag-based contact grouping
    - Primary identifier: Phone number
  - **Message Templates**:
    - CRUD operations
    - Types: "Text", "Text & Image"
  - **Campaigns**:
    - CRUD + Copy campaign
    - Draft → Launch (runs virtually)
    - Store message data per contact
    - Live campaign status with polling
    - Launched campaigns are immutable

---

## 🧩 Special Use Case

- A single user with the same email can be part of multiple workspaces.
- On login, users can switch between accessible workspaces from a workspace selector in the OutreachHub Portal.

---

## 📦 Codebase & Collaboration

- All source code is maintained in this GitHub repository to ensure:
  - Version control
  - Progress tracking
  - Collaboration management

---

## 🚀 Getting Started

TBD – Setup instructions will be added as development progresses.

---

## 📄 License

MIT (or as applicable)
