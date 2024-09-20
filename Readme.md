# Fancode API Testing Assignment

This project is designed to automate API testing for Fancode's assignment using PactumJS with Cucumber BDD. It validates the expected behavior of APIs based on the scenarios outlined in the Gherkin feature files.

## Pre-Requisites

Make sure Node.js is installed, preferably using nvm. You can install nvm using the following command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Use the specific Node.js version:

```bash
nvm use 18.16.0
```


Install project dependencies:

```bash
npm install
```

Signup to reports.cucumber.io and export the token for reporting:
[Sample Report - https://reports.cucumber.io/reports/c7b0e0a3-7222-4f84-8d70-310fe670be2a]

```bash
export CUCUMBER_PUBLISH_TOKEN=${your_token_value}
```

## Run Tests

- `npm run test`

## Folder Structure
```bash
.
├── features
│   ├── step_definitions  # Step definitions for Cucumber
│   ├── utils               # API helper functions or Pactum flows
│   ├── test_data         # Test data files
│   ├── feature_files     # Gherkin feature files
├── reports               # Test reports and logs
├── package-lock.json     # Project lock file
├── node_modules          # Node modules for the project
├── package.json          # Project configuration and dependencies
└── README.md             # Project documentation
```


