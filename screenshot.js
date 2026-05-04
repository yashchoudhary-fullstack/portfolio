const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log("Navigating to Yash Portfolio...");
  await page.goto('https://yash-portfolio-1f5.web.app/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000)); // Wait for animations
  await page.screenshot({ path: 'd:/yash/New Portfolio/public/projects/yash_portfolio_real.png' });
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'd:/yash/New Portfolio/public/projects/yash_portfolio_real_2.png' });

  console.log("Navigating to Cheat Viewer...");
  await page.goto('https://cheat-viewer-yash.web.app/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: 'd:/yash/New Portfolio/public/projects/cheat_real.png' });
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'd:/yash/New Portfolio/public/projects/cheat_real_2.png' });

  console.log("Navigating to OnePlus Showcase...");
  await page.goto('https://oneplus-11r-showcase-yash.web.app/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: 'd:/yash/New Portfolio/public/projects/selling_real.png' });
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'd:/yash/New Portfolio/public/projects/selling_real_2.png' });

  await browser.close();
  console.log("Screenshots captured successfully!");
})();
