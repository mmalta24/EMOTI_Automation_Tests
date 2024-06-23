const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder("chromedriver.exe");

exports.filterByName = async function () {
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

    // gerir utilizadores
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageUser")).click();

    await driver.findElement(By.id("filterTitle")).sendKeys("Administrador");

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByTypeChild = async function () {
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

    // gerir utilizadores
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageUser")).click();

    // form
    await driver.findElement(By.id("filterLevel")).click();
    await driver
      .findElement(By.css("#filterLevel > option[value='Criança']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByTypeTutor = async function () {
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

    // gerir utilizadores
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageUser")).click();

    // form
    await driver.findElement(By.id("filterLevel")).click();
    await driver
      .findElement(By.css("#filterLevel > option[value='Tutor']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByTypeTeacher = async function () {
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

    // gerir utilizadores
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageUser")).click();

    // form
    await driver.findElement(By.id("filterLevel")).click();
    await driver
      .findElement(By.css("#filterLevel > option[value='Professor']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByTypeAdmin = async function () {
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

    // gerir utilizadores
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageUser")).click();

    // form
    await driver.findElement(By.id("filterLevel")).click();
    await driver
      .findElement(By.css("#filterLevel > option[value='Administrador']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.createAdmin = async function () {
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

    // gerir utilizadores
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageUser")).click();

    await driver
      .findElement(By.css(".container .justify-content-end .btn"))
      .click();

    await driver.findElement(By.id("__BVID__42")).sendKeys("novoAdmin");
    await driver.findElement(By.id("__BVID__43")).sendKeys("Esmad_2122");
    await driver.findElement(By.id("__BVID__44")).sendKeys("Esmad_2122");
    await driver.findElement(By.id("__BVID__45")).sendKeys("Nome Admin");
    await driver
      .findElement(By.id("__BVID__46"))
      .sendKeys("novoAdmin@gmail.com");

    await driver.findElement(By.css("form .btn")).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.seeUserData = async function () {
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

    // gerir utilizadores
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageUser")).click();

    // ações - informação do utilizador
    await driver
      .findElement(By.css("table tr:nth-of-type(3) .btn:nth-of-type(1)"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.blockUser = async function () {
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

    // gerir utilizadores
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageUser")).click();

    // ações - bloquear utilizador
    await driver
      .findElement(By.css("table tr:nth-of-type(3) .btn:nth-of-type(2)"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async function () {
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

    // gerir utilizadores
    await driver.findElement(By.id("__BVID__16")).click();
    await driver.findElement(By.id("manageUser")).click();

    // ações - apagar utilizador
    await driver
      .findElement(By.css("table tr:nth-of-type(3) .btn:nth-of-type(3)"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};
