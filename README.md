# cypress-api-automation
Cypress API Automation framework for REST APIs.

This project demonstrates **API Automation Testing using Cypress and JavaScript**.
It is designed in a clean and simple way to validate REST APIs with real-world examples.

---

## 🛠 Tech Stack
- Cypress
- JavaScript
- REST API Automation
- Mocha + Chai Assertions

---

## 📂 Project Structure
cypress-api-automation
│
├── cypress
│ ├── e2e
│ │ ├── getUsers.cy.js # GET API example
│ │ └── addBook.cy.js # POST API example
│ │
│ ├── fixtures # Test data (if required)
│ └── support # Cypress commands & setup
│
├── cypress.config.js
├── package.json
└── README.md
---

## 🚀 How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
npx cypress open
npx cypress run
