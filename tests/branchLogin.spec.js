const { test, expect } = require('@playwright/test');

test('Verify Login Page Title', async ({ page }) => {

    await page.goto(
        'https://practicetestautomation.com/practice-test-login/'
    );

    await expect(page).toHaveTitle(/Test Login/);

});