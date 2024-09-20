# Fancode API Testing Assignment

Lightweight API Testing code

API Testing framework used is PactumJS with Cucumber BDD

## Pre-Requisites

Make sure node or nvm is installed

## Install Packages

- `nvm use 18.16.0` sets the NVM version to 18.16.0.
- `npm i` installs all the dependencies.

- Signup to reports.cucumber.io and then export token as shown below for reporting
- `export CUCUMBER_PUBLISH_TOKEN=${your_token_value}` sets up reporting.

[Sample Report - https://reports.cucumber.io/reports/c7b0e0a3-7222-4f84-8d70-310fe670be2a]

## Run Tests

- `npm run test`

## Folder Structure

.
├── features
│   ├── step_definitions  # Step definitions for Cucumber
│   ├── utils               # API helper functions or Pactum flows
│   ├── test_data         # Test data files
│   ├── feature_files     # Gherkin feature files
├── reports               # Test reports and logs
├── package.json          # Project configuration and dependencies
└── README.md             # Project documentation



