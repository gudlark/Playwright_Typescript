/*
import { expect, test } from '@playwright/test';
import { readLoginTestCases } from '../src/utils/excel-data.js';

const loginTestCases = await readLoginTestCases();

for (const testCase of loginTestCases) {
  test(`Login: ${testCase.caseId}`, async ({ page }) => {
    await page.setContent(`
      <main>
        <h1 id="page-title">Sample sign in</h1>
        <form>
          <label for="username">Username</label>
          <input id="username" name="username" />
          <label for="password">Password</label>
          <input id="password" name="password" type="password" />
          <button type="submit">Sign in</button>
        </form>
        <p role="status" aria-live="polite"></p>
        <script>
          document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;
            const isAuthenticated = username === 'admin' && password === 'secret';
            document.querySelector('[role="status"]').textContent = isAuthenticated
              ? 'Welcome, admin!'
              : 'Invalid username or password';
            if (isAuthenticated) {
              document.querySelector('#page-title').textContent = 'Welcome, admin!';
            }
          });
        </script>
      </main>
    `);

    await page.getByLabel('Username').fill(testCase.username);
    await page.getByLabel('Password').fill(testCase.password);
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByRole('status')).toHaveText(testCase.expectedMessage);
    if (testCase.shouldLogin) {
      await expect(page.getByRole('heading', { name: 'Welcome, admin!' })).toBeVisible();
    } else {
      await expect(page.getByRole('heading', { name: 'Sample sign in' })).toBeVisible();
    }
  });
}
*/