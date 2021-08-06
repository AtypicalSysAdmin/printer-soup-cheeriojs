const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
//const functionFile = require('./functionFiles.js');


//IIFE -Immediately incoked function expression
(async () => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(`http://192.168.0.10`);
    await page.waitForSelector('#TonerSupplies > div > div > div.contentBody > div > div > div > span');

    const pagedata = await page.evaluate(() => {

        return {
            html: document.documentElement.innerHTML
        }
    });

    const $ = cheerio.load(pagedata.html);

    let element = $('#TonerSupplies > div > div > div.contentBody > div > div > div > span');

    console.log(element.text());





    await browser.close();
    
})();