const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder("chromedriver.exe");

exports.registerChild = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(2)")).click();

    await driver.findElement(By.id("__BVID__13")).sendKeys("random");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.id("__BVID__15")).sendKeys("Esmad_2122");
    await driver.findElement(By.id("__BVID__16")).sendKeys("Pessoa");
    await driver.findElement(By.id("__BVID__17")).sendKeys("randomc@gmail.com");
    await driver.findElement(By.id("__BVID__18")).click();
    await driver
      .findElement(By.css("#__BVID__18 > option[value='Criança']"))
      .click();

    await driver.findElement(By.css("form button")).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.registerTutor = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(2)")).click();

    await driver.findElement(By.id("__BVID__13")).sendKeys("random");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.id("__BVID__15")).sendKeys("Esmad_2122");
    await driver.findElement(By.id("__BVID__16")).sendKeys("Pessoa");
    await driver.findElement(By.id("__BVID__17")).sendKeys("randomc@gmail.com");
    await driver.findElement(By.id("__BVID__18")).click();
    await driver
      .findElement(By.css("#__BVID__18 > option[value='Tutor']"))
      .click();

    await driver.findElement(By.css("form button")).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.registerTeacher = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(2)")).click();

    await driver.findElement(By.id("__BVID__13")).sendKeys("random");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");
    await driver.findElement(By.id("__BVID__15")).sendKeys("Esmad_2122");
    await driver.findElement(By.id("__BVID__16")).sendKeys("Pessoa");
    await driver.findElement(By.id("__BVID__17")).sendKeys("randomc@gmail.com");
    await driver.findElement(By.id("__BVID__18")).click();
    await driver
      .findElement(By.css("#__BVID__18 > option[value='Professor']"))
      .click();

    await driver.findElement(By.css("form button")).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.loginAdmin = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(1)")).click();

    await driver.findElement(By.id("__BVID__13")).sendKeys("Admin");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");

    await driver.findElement(By.css("form button")).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.loginTeacher = async function () {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    await driver.get("https://emoti.netlify.app/#/");

    await driver.findElement(By.css("div.w-75 > .btn:nth-of-type(1)")).click();

    await driver.findElement(By.id("__BVID__13")).sendKeys("User");
    await driver.findElement(By.id("__BVID__14")).sendKeys("Esmad_2122");

    await driver.findElement(By.css("form button")).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};
