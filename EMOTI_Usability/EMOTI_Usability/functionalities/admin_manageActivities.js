const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder("chromedriver.exe");

exports.filterName = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    // login
    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(1)")).click();
    await driver.findElement(By.id("__BVID__13")).sendKeys("Admin");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.css("form button")).click();

    // gerir atividades
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageActivities")).click();

    await driver
      .findElement(By.id("filterTitle"))
      .sendKeys("Qual é o meu nome?");

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterCategoryQuiz = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    // login
    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(1)")).click();
    await driver.findElement(By.id("__BVID__13")).sendKeys("Admin");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.css("form button")).click();

    // gerir atividades
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageActivities")).click();

    await driver.findElement(By.id("filterLevel")).click();
    await driver
      .findElement(By.css("#filterLevel > option[value='Quiz']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterDifficultyEasy = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    // login
    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(1)")).click();
    await driver.findElement(By.id("__BVID__13")).sendKeys("Admin");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.css("form button")).click();

    // gerir atividades
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageActivities")).click();

    await driver.findElement(By.id("filterDifficulty")).click();
    await driver
      .findElement(By.css("#filterDifficulty > option[value='Fácil']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterDifficultyMedium = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    // login
    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(1)")).click();
    await driver.findElement(By.id("__BVID__13")).sendKeys("Admin");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.css("form button")).click();

    // gerir atividades
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageActivities")).click();

    await driver.findElement(By.id("filterDifficulty")).click();
    await driver
      .findElement(By.css("#filterDifficulty > option[value='Médio']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterDifficultyHard = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    // login
    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(1)")).click();
    await driver.findElement(By.id("__BVID__13")).sendKeys("Admin");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.css("form button")).click();

    // gerir atividades
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageActivities")).click();

    await driver.findElement(By.id("filterDifficulty")).click();
    await driver
      .findElement(By.css("#filterDifficulty > option[value='Dificil']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.addEmotion = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    // login
    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(1)")).click();
    await driver.findElement(By.id("__BVID__13")).sendKeys("Admin");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.css("form button")).click();

    // gerir atividades
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageActivities")).click();

    // gerir emoções
    await driver.findElement(By.id("btnEmotions")).click();
    await driver.findElement(By.css("#__BVID__43 input")).sendKeys("Emoção");
    await driver.findElement(By.css("form .btn")).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.deleteEmotion = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    // login
    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(1)")).click();
    await driver.findElement(By.id("__BVID__13")).sendKeys("Admin");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.css("form button")).click();

    // gerir atividades
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageActivities")).click();

    // gerir emoções
    await driver.findElement(By.id("btnEmotions")).click();
    await driver
      .findElement(
        By.css(
          "#modalManagerActivity___BV_modal_content_ table tr:nth-of-type(2) .btn"
        )
      )
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};
