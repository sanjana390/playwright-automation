const { test, expect } = require('@playwright/test');

test('Take Screenshot', async ({ page }) => {

    await page.goto(
        'https://practicetestautomation.com/practice-test-login/'
    );

    await page.screenshot({
        path: 'screenshots/login.png'
    });

});