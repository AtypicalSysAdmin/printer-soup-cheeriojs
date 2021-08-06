# printer-soup-js
How to simply scrape the printer's embedded server with its ip address

this is a simple short code that you need to modify the selectors according to your printer's hub

in this case we assume that elements of the website are stable and won't be moving around

if they do, you just need to do some simple modifications like using .find() method

check puppeteer or cheerio documentry for more info

required node modules:
npm init
npm install puppeteer
npm install cheerio
npm install request-promise
