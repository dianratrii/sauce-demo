const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // Directory where your test files are located
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: false,  // Run tests in headless mode
  },
});