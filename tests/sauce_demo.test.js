const { test, expect } = require('@playwright/test');

test('Complete purchase flow on Saucedemo', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Select 3 items
  await page.click('button[name="add-to-cart-sauce-labs-backpack"]');
  await page.click('button[name="add-to-cart-sauce-labs-bike-light"]');
  await page.click('button[name="add-to-cart-sauce-labs-bolt-t-shirt"]');

  // Go to cart
  await page.click('.shopping_cart_link');

  // Remove an item from the cart
  await page.click('button[name="remove-sauce-labs-bike-light"]');

  // Checkout
  await page.click('#checkout');

  // Fill the form
  await page.fill('#first-name', 'Dian');
  await page.fill('#last-name', 'Ratri');
  await page.fill('#postal-code', '55231');
  await page.click('#continue');

  // Click the Finish button
  await page.click('#finish');

  // Assertion: Check if we reached the order confirmation page
  const confirmationText = await page.textContent('.complete-header');
  expect(confirmationText).toBe('Thank you for your order!');
});