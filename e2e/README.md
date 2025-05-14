# Table of contents

- [Table of contents](#table-of-contents)
  - [1. E2E tests overview](#1-e2e-tests-overview)
  - [2. Getting Started](#2-getting-started)
  - [2.1. Project setup](#21-project-setup)
    - [Install dependencies](#install-dependencies)
    - [Install browsers](#install-browsers)
  - [2.2. Start local website](#22-start-local-website)
  - [3. Run web platform E2E tests](#3-run-e2e-tests)
    - [3.1 Trigger headless test execution](#31-trigger-headless-test-execution)
    - [3.2 Start playwright UI](#32-start-playwright-ui)
    - [3.3 Start playwright Debug](#33-start-playwright-debug)
  - [4. Local Allure report](#4-local-allure-report)

## 1. E2E tests overview

This folder contains E2E test automation for the Hunt platform.

## 2. Getting Started

## 2.1. Project setup

Navigate to the `./e2e` folder and run:

### Install dependencies

```zsh
npm ci
```

### Install browsers

```zsh
npm run pw:install:browsers
```

## 2.2. Start local website

Follow the deployment instructions.

## 3. Run E2E tests

### 3.1 Trigger headless test execution

Navigate to the `./e2e` folder and run:

```zsh
npm run pw:run:local
```

### 3.2 Start playwright UI

Navigate to the `./e2e` folder and run:

```zsh
npm run pw:run:local-open
```

### 3.3 Start playwright Debug

```zsh
npm run pw:run:local-open-debug
```

## 4. Local Allure report

Please note this command require Allure Commandline to be installed previously.

```zsh
allure serve allure-results
```
