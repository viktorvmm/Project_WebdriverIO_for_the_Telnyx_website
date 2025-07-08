# Telnyx WebdriverIO Automation Project

## Description
Automation of functional and UI testing for key features of the [Telnyx](https://telnyx.com) website using WebdriverIO, Allure, Docker, and GitHub Actions.

- **Test Plan and Cases:** [Google Sheets](https://docs.google.com/spreadsheets/d/1LoIFcF81n-ygUetXpMEkUO-fPcZZc_1N_7SzygsPgAQ/edit?usp=sharing)

---

## Project Structure
- `test/specs/` — test cases (20+)
- `test/pageobjects/` — Page Object pattern
- `wdio.conf.js` — base config
- `wdio.chrome.conf.js`, `wdio.firefox.conf.js`, `wdio.edge.conf.js` — separate configs for browsers
- `allure-results/`, `allure-report/` — results and reports
- `.github/workflows/ci-allure-pages.yml` — CI/CD pipeline

---

## Main Features
- Run tests in Chrome, Firefox, Edge (optional)
- Parallel and sequential execution
- Allure report generation
- CI/CD: test execution and Allure deployment to GitHub Pages
- Docker support (locally and in CI)

---

## Requirements
- Node.js >= 18
- npm >= 9
- Docker (for isolated runs)

---

## Installation
```bash
npm ci
```

---

## Running Tests

### All tests (default browser):
```bash
npm test
```

### Single file (e.g., sign up test):
```bash
npx wdio run wdio.conf.js --spec test/specs/signUp.valid.spec.js
```

### Chrome:
```bash
npx wdio run wdio.chrome.conf.js
```

### Firefox:
```bash
npx wdio run wdio.firefox.conf.js
```

### Edge (optional):
```bash
npx wdio run wdio.edge.conf.js
```

---

## Project Structure 
```
Telnyx-wdio/
  ├── allure-results/
  ├── docker-compose.yml
  ├── Dockerfile
  ├── login-empty-debug.png
  ├── login-failed.png
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── signUp_before_wait.png
  ├── test/
  │   ├── pageobjects/
  │   │   ├── aiassistant.page.js
  │   │   ├── footer.page.js
  │   │   ├── forgotPassword.page.js
  │   │   └── ... (ще 5 файлів)
  │   └── specs/
  │       ├── aiassistant.spec.js
  │       ├── contactUs.header.spec.js
  │       ├── forgotPassword.valid.spec.js
  │       └── ... (ще 17 файлів)
  ├── wdio.chrome.conf.js
  ├── wdio.conf.js
  ├── wdio.edge.conf.js
  ├── wdio.firefox.conf.js
  └── .github/
      └── workflows/
          └── ci-allure-pages.yml
```

---

## Allure Report

### Generate locally:
```bash
npm run allure:generate
npm run allure:open
```

### Deploy to GitHub Pages (automatically after CI):
- [Allure Report on GitHub Pages](https://viktorvmm.github.io/Project_WebdriverIO_for_the_Telnyx_website/)

---

## Running in Docker

### Locally:
```bash
docker build -t telnyx-wdio .
docker run --rm telnyx-wdio
```

### In CI — automatically in a container

---

## CI/CD
- Workflow: `.github/workflows/ci-allure-pages.yml`
- Runs on push/pull request to master
- Test results and Allure report are published automatically

---

## Useful Links
- [Test Plan and Test Cases (Google Sheets)](https://docs.google.com/spreadsheets/d/1LoIFcF81n-ygUetXpMEkUO-fPcZZc_1N_7SzygsPgAQ/edit?usp=sharing)
- [Allure Report on GitHub Pages](https://viktorvmm.github.io/Project_WebdriverIO_for_the_Telnyx_website/)

---

## Author
- Test Engineer: Viktor
- Tech stack: WebdriverIO, Node.js, Docker, Allure, GitHub Actions

---

## Daily Workflow

### Day 1: Project Setup and Initial Configuration
- Created WebdriverIO project scaffold
- Installed dependencies (WebdriverIO, Allure)
- Configured wdio.conf.js for Chrome
- Prepared separate configs for Chrome and Firefox
- Created basic folder structure

### Day 2: Writing Core Tests and Cross-Browser Setup
- Wrote core tests for login, sign-up, navigation
- Set up cross-browser support
- Verified test runs in Chrome and Firefox

### Day 3: Allure Reporting and GitHub Actions Pipeline
- Integrated Allure Reporter
- Created GitHub Actions workflow for CI
- Set up automatic Allure deployment to GitHub Pages

### Day 4: Dockerization and Pipeline Enhancements
- Prepared Dockerfile for running tests in a container
- Created docker-compose.yml for local and CI runs
- Configured GitHub Actions to run in Docker
- Tested local run via Docker

### Day 5: Test Expansion and Final Polish
- Added more tests (20+), including AI Assistant, Contact Us, Pricing, Voice AI Agents
- Optimized npm scripts for flexible runs
- Verified cross-browser test stability and report accuracy 