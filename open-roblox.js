// open-roblox.js

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true, // можешь отключить для визуализации
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('https://www.roblox.com/join/082sk', {
    waitUntil: 'networkidle2'
  });

  console.log('Roblox join page opened.');

  // Здесь ты можешь добавить действия:
  // await page.click('#some-button');
  // await page.type('#username', '...');
  // await page.type('#password', '...');
  // await page.click('#login-button');

  await browser.close();
})();
