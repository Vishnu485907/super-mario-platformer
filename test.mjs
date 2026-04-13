import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  
  await page.goto('file:///tmp/mario-game/index.html');
  await page.waitForTimeout(2000);
  
  // Check canvas exists
  const canvas = await page.locator('canvas');
  const isVisible = await canvas.isVisible();
  
  if (!isVisible) {
    console.log('ERROR: Canvas not visible');
    process.exit(1);
  }
  
  // Test game interaction - press space to start
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  
  // Move right and jump
  await page.keyboard.down('ArrowRight');
  await page.waitForTimeout(500);
  await page.keyboard.press('Space');
  await page.waitForTimeout(500);
  await page.keyboard.up('ArrowRight');
  
  await browser.close();
  
  if (errors.length > 0) {
    console.log('Errors found:', errors);
    process.exit(1);
  }
  
  console.log('SUCCESS: Game loaded and runs correctly!');
})();
