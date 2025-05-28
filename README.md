# Cypress Automated Tests

This project contains automated end-to-end tests using [Cypress](https://www.cypress.io/). It is designed to test web application functionality in a modern and easy-to-use environment.

## 📁 Project Structure
```bash
cypress/
│
├── e2e/ # Test files
│ └──pom/
│     └──LoginPom.js 
│ └──Login.cy.js
│
├── fixtures/ # Test data files
├── support/ # Custom commands and setup
└── videos/ and screenshots/ (auto-generated)
```

## 🚀 Getting Started

### 1. Clone the repository


git clone https://github.com/Aiizan/Automatition-Excerise-Page-Test
cd your-repo-name

### 2. Install dependencies


Make sure you have Node.js installed.


npm install

3. Run Cypress
Open the Cypress UI:

npx cypress open

Or run tests in headless mode:

npx cypress run
