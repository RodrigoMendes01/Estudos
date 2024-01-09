//import express, {Request, Response} from 'express';
import puppeteer from 'puppeteer';
import 'dotenv/config';

//const app = express();

(async () => {
  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();

  const url = process.env.BASE_URL;

  await page.goto(url!);

  await page.click('[href="/2/servico"]');
  await page.type('#cnpj', process.env.USER_LOGIN!);
  await page.type('#password', process.env.USER_PASSWOR!);
  await page.type('#nronf', '356');

  await page.click('.coleta');
})();

// app.listen(3000, () => {
//   console.log('🔥 Server started at http://localhost:3000');
// });



