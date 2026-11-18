const { chromium } = require("playwright");

async function main() {
    const browser = await chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto("https://pms-uat.casengine.app");
    console.log("Browser opened successfully!");
    console.log("Page title:", await page.title());
    await page.getByPlaceholder("Enter your email address").fill("sanjana@codengines.com");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "UAT1" }).click();
    //await page.locator('button:has-text("Sign In")').click();

    await page.getByPlaceholder("Enter your password").fill("Jaivik@170313");
    await page.getByRole("button", { name: "Sign In" }).click();
    await page.getByRole("button", { name: "Close" }).click();
    await page.getByRole("link", { name: "Clients" }).click();
    await page.getByRole("button", { name: "New Client" }).click();
    await page.waitForTimeout(3000);
    await page.locator('input[placeholder="Enter name"]').first().fill("Automate1");
    await page.waitForTimeout(3000);
    await page.getByRole("button", { name: "Select Myself" }).first().click();
    await page.getByRole("button", { name: "Save" }).click();


// Keep the browser open until you close it
    await new Promise(() => {});
}

main().catch(console.error);