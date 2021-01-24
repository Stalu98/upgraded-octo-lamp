
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('https://www.flashscore.com/');

        // Enter text "cheese" and perform keyboard action "Enter"
        const element = await driver.findElement(By.className('sportName soccer'));

        console.log(await element.findElement(By.className('event__header top')))

        let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

        console.log(await firstResult.getAttribute('textContent'));
    }
    finally{
        driver.quit();
    }
})();

//*[@id="g_1_EqzQ4n7K"]