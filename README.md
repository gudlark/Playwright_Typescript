# Playwright TypeScript + Allure + Excel

A small Playwright Test starter that loads data-driven test cases from an Excel workbook and publishes results with Allure.

## Requirements

- Node.js 18 or later
- Java installed and available on `PATH` to generate and open Allure reports

## Setup

```bash
npm install
npx playwright install chromium
```

## Run tests and view the report

```bash
npm test
npm run report:generate
npm run report:open
```

Test results are written to `allure-results/`; the generated HTML report is written to `allure-report/`. Both directories are ignored by Git.

Other useful commands:

```bash
npm run test:headed
npm run test:debug
```

## Excel data

The starter test reads `test-data/login-data.xlsx`, worksheet `Login`. The first row must contain these column names:

| caseId | username | password | expectedMessage | shouldLogin |
| --- | --- | --- | --- | --- |
| valid-admin | admin | secret | Welcome, admin! | true |
| invalid-password | admin | wrong | Invalid username or password | false |

`shouldLogin` accepts only `true` or `false`. Required values and worksheet presence are validated when the test suite loads; configuration errors fail clearly rather than silently skipping cases. Add one row for each scenario. Keep sensitive credentials out of committed workbooks.

## Adapt the example

`tests/data-driven-login.spec.ts` uses a tiny in-page sign-in form so the example runs without a separate application or network access. Replace `page.setContent(...)` and its example assertions with your application's page objects, fixtures, or `BASE_URL` navigation. The Excel reader is in `src/utils/excel-data.ts`; follow its row-mapping and validation pattern for other worksheets.

Set `BASE_URL` when tests need an application URL. Playwright config includes Chromium, failure screenshots, retained videos on failure, and traces on the first retry.
