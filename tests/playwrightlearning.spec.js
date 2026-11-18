const { test, expect } = require('@playwright/test');

test('Verify sucessfull login', async ({ page }) => {

    // Open login page
    await page.goto(
        'https://practicetestautomation.com/practice-test-login/'
    );

    // Enter correct username
    await page.locator('#username').fill('student');

    // Enter incorrect password
    await page.locator('#password').fill('Password123');

    // Click Submit
    await page.getByRole('button', { name: 'Submit' }).click();

    

    await expect(page)
        .toContainText('/logged-in-successfully/');

});