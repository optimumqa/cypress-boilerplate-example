<h1 align="center">Welcome to cypress-boilerplate-example 👋</h1>
<a href="https://github.com/optimumqa/cypress-boilerplate/blob/main/LICENSE">
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
</a>

<a href="">
  <img alt="Cypress" src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" target="_blank" />
</a>
<a href="">
  <img alt="Mocha" src="https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white" target="_blank" />
</a>
<a href="">
  <img alt="Typescript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" target="_blank" />
</a>
<a href="">
  <img alt="Javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" target="_blank" />
</a>

## About

This project was generated from [optimumqa/cypress-boilerplate](https://github.com/optimumqa/cypress-boilerplate) which we have created to use as a pre-configured template for every new project.

Make sure to read the [docs](https://github.com/optimumqa/cypress-boilerplate#readme) for more extended details about the whole configuration.

See latest report at [cypress-boilerplate-example.optimumqa.com](https://cypress-boilerplate-example.optimumqa.com)

In this example we're gonna be testing the [saucedemo.com](https://www.saucedemo.com/)(a website made for testing purposes).

## ✨ Project structure

```
- cypress/
  - configs/
    - saucedemo/
      - default.ts
  - downloads/
  - fixtures/
    - saucedemo/
      - routes.json
      - users.json
  - e2e/
    - saucedemo/
      - default.cy.ts
  - plugins/
    - index.ts
  - screenshots/
  - support/
    - e2e/
      - saucedemo/
        - commands.ts
        - index.ts
      - commands.ts
    - e2e.ts
  - videos/
```

## Installation

```sh
$ npm install
```

## Developing

Following command:

```sh
$ npm test
```

- Cleans previous reports
- Runs all tests on the staging environment
- Generates a report in the `cypress/reports/mochareports` directory.

> See `package.json` for all available commands.

> Available environments are `[staging, release, production]`

Other available project commands are:

```json
{
  "scripts": {
    "saucedemo-staging": "cypress run -e product=saucedemo,env=staging",
    "saucedemo-staging:open": "cypress open -e product=saucedemo,env=staging",
    "saucedemo-release": "cypress run -e product=saucedemo,env=release",
    "saucedemo-production": "cypress run -e product=saucedemo,env=production",
    "test": "npm run saucedemo-production"
  }
}
```

## Reporting

Reports will only be generated with the command:

```sh
npm run posttest
```

Make sure to clear previous reports before running your tests with the command:

```sh
npm run pretest
```

## Build & Delpoy

Reports are deployed to [cypress-boilerplate-example.optimumqa.com](https://cypress-boilerplate-example.optimumqa.com)
