const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    use: {
        screenshot: 'only-on-failure',
        trace: 'on-first-retry'
    },

    reporter: 'html'
});