import songsDump from './songs.js';
import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
const BUTTON_SELECTOR = '.Fm7C3gdh5Lsc9qSXrQwO.tGKwoPuvNBNK3TzCS5OH';
const EMAIL_INPUT = '#login-username';
const PASSWORD_INPUT = '#login-password';
const LOGIN_BUTTON = '#login-button';
const INPUT_SELECTOR = '.Type__TypeElement-goli3j-0.cPwEdQ.QO9loc33XC50mMRUCIvf';

dotenv.config();

const songs = songsDump.map((song) => {
  return {
    name: song.ART_NAME,
    title: song.SNG_TITLE,
  }
})

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://accounts.spotify.com/pt-BR/login?continue=https%3A%2F%2Fopen.spotify.com%2F');
  await page.waitForSelector(EMAIL_INPUT);
  await page.type(EMAIL_INPUT, process.env.EMAIL);
  await page.waitForSelector(PASSWORD_INPUT);
  await page.type(PASSWORD_INPUT, process.env.PASSWORD);
  await page.waitForSelector(LOGIN_BUTTON);
  await page.click(LOGIN_BUTTON);

  await page.waitForTimeout(5000);

  await page.goto('https://open.spotify.com/search')
  for (let i = 0; i < songs.length; i++) {
    try {
      await page.waitForSelector(INPUT_SELECTOR);
      let inputValue = await page.$eval(INPUT_SELECTOR, el => el.value)
      await page.keyboard.press('End');
      for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
      }
      await page.type(INPUT_SELECTOR, `${songs[i].name} ${songs[i].title}`);
      await page.waitForTimeout(2000);
      await page.waitForSelector(BUTTON_SELECTOR);
      await page.click(BUTTON_SELECTOR);
      await page.waitForTimeout(2000);
      await page.click(INPUT_SELECTOR);
      inputValue = await page.$eval(INPUT_SELECTOR, el => el.value)
      await page.keyboard.press('End');
      for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
      }
      await page.waitForTimeout(2000);
    } catch (err) {
      console.log(err, songs[i])
      continue
    }
  }
  
  await page.waitForTimeout(5000);
  await browser.close()
})();
