const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
});

test('Valid Login', async ({ page }) => {
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL(/logged-in-successfully/);
});

test('Invalid Password', async ({ page }) => {
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('WrongPassword');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('#error'))
        .toContainText('Your password is invalid!');
});