const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder("chromedriver.exe");

exports.updatePicture = async function () {
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

    // pagina profile
    await driver.findElement(By.id("navProfile")).click();

    // mudar foto
    await driver.findElement(By.id("changePicture")).click();
    await driver
      .findElement(By.id("newImage"))
      .sendKeys(
        "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
      );
    await driver.findElement(By.css(".text-end")).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.updatePassword = async function () {
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

    // pagina profile
    await driver.findElement(By.id("navProfile")).click();

    // mudar password
    await driver.findElement(By.id("changePassword")).click();

    await driver
      .findElement(By.css("#__BVID__50 input"))
      .sendKeys("Esmad_2122");
    await driver.findElement(By.css("#__BVID__52 input")).sendKeys("Esmad_22");
    await driver.findElement(By.css("#__BVID__54 input")).sendKeys("Esmad_22");
    await driver
      .findElement(By.css("#modal-profile___BV_modal_body_ .btn"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};
