const puppeteer = require('puppeteer') 

async function navegador() {
    console.log('lanzamos navegador')
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage('')
    await page.goto('https://es-la.facebook.com/');

    var titulo = await page.evaluate(() => {
        const h2 = document.querySelector('h2')
        console.log("primer log ()=> ",h2.innerHTML)
        return h2.innerHTML
    })

    console.log(titulo)
    browser.close()
};


navegador()