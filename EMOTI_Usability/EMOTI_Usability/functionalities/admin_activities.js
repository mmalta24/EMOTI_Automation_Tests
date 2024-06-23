const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder("chromedriver.exe");

exports.filterByDifficultyEasy = async function () {
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

    // pagina activities
    await driver.findElement(By.id("navActivities")).click();

    await driver
      .findElement(By.css("#backgroundActivities .container .btn"))
      .click(); // abrir filtro

    // opções "dificuldade"
    let selectDifficulty = await driver.findElement(By.id("__BVID__38"));
    // porque é a preciso esperar a sidebar aparecer
    await driver.wait(until.elementIsVisible(selectDifficulty), 100);
    await selectDifficulty.click();

    await driver
      .findElement(By.css("#__BVID__38 > option[value='Fácil']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByDifficultyMedium = async function () {
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

    // pagina activities
    await driver.findElement(By.id("navActivities")).click();

    await driver
      .findElement(By.css("#backgroundActivities .container .btn"))
      .click(); // abrir filtro

    // opções "dificuldade"
    let selectDifficulty = await driver.findElement(By.id("__BVID__38"));
    // porque é a preciso esperar a sidebar aparecer
    await driver.wait(until.elementIsVisible(selectDifficulty), 100);
    await selectDifficulty.click();

    await driver
      .findElement(By.css("#__BVID__38 > option[value='Médio']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByDifficultyHard = async function () {
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

    // pagina activities
    await driver.findElement(By.id("navActivities")).click();

    await driver
      .findElement(By.css("#backgroundActivities .container .btn"))
      .click(); // abrir filtro

    // opções "dificuldade"
    let selectDifficulty = await driver.findElement(By.id("__BVID__38"));
    // porque é a preciso esperar a sidebar aparecer, faz-se wait until
    await driver.wait(until.elementIsVisible(selectDifficulty), 100);
    await selectDifficulty.click();

    await driver
      .findElement(By.css("#__BVID__38 > option[value='Dificil']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByCategoryQuiz = async function () {
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

    // pagina activities
    await driver.findElement(By.id("navActivities")).click();

    await driver
      .findElement(By.css("#backgroundActivities .container .btn"))
      .click(); // abrir filtro

    // opções "categoria"
    let selectCategory = await driver.findElement(
      By.css("#sidebar-right form #__BVID__39")
    );
    // porque é a preciso esperar a sidebar aparecer, faz-se wait until
    await driver.wait(until.elementIsVisible(selectCategory), 100);
    await selectCategory.click();

    await driver
      .findElement(By.css("#__BVID__39 > option[value='Quiz']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByCategoryRecognition = async function () {
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

    // pagina activities
    await driver.findElement(By.id("navActivities")).click();

    await driver
      .findElement(By.css("#backgroundActivities .container .btn"))
      .click(); // abrir filtro

    // opções "categoria"
    let selectCategory = await driver.findElement(
      By.css("#sidebar-right form #__BVID__39")
    );
    // porque é a preciso esperar a sidebar aparecer, faz-se wait until
    await driver.wait(until.elementIsVisible(selectCategory), 100);
    await selectCategory.click();

    await driver
      .findElement(By.css("#__BVID__39 > option[value='Reconhecimento']"))
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByCategoryPersonalizedTutor = async function () {
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

    // pagina activities
    await driver.findElement(By.id("navActivities")).click();

    await driver
      .findElement(By.css("#backgroundActivities .container .btn"))
      .click(); // abrir filtro

    // opções "categoria"
    let selectCategory = await driver.findElement(
      By.css("#sidebar-right form #__BVID__39")
    );
    // porque é a preciso esperar a sidebar aparecer, faz-se wait until
    await driver.wait(until.elementIsVisible(selectCategory), 100);
    await selectCategory.click();

    await driver
      .findElement(
        By.css(
          "#__BVID__39 > option[value='Atividades Personalizadas (Tutor)']"
        )
      )
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterByCategoryPersonalizedTeacher = async function () {
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

    // pagina activities
    await driver.findElement(By.id("navActivities")).click();

    await driver
      .findElement(By.css("#backgroundActivities .container .btn"))
      .click(); // abrir filtro

    // opções "categoria"
    let selectCategory = await driver.findElement(
      By.css("#sidebar-right form #__BVID__39")
    );
    // porque é a preciso esperar a sidebar aparecer, faz-se wait until
    await driver.wait(until.elementIsVisible(selectCategory), 100);
    await selectCategory.click();

    await driver
      .findElement(
        By.css(
          "#__BVID__39 > option[value='Atividades Personalizadas (Professor)']"
        )
      )
      .click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.filterAndReset = async function () {
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

    // pagina activities
    await driver.findElement(By.id("navActivities")).click();

    await driver
      .findElement(By.css("#backgroundActivities .container .btn"))
      .click(); // abrir filtro

    // opções "dificuldade"
    let selectDifficulty = await driver.findElement(By.id("__BVID__38"));
    // porque é a preciso esperar a sidebar aparecer, faz-se wait until
    await driver.wait(until.elementIsVisible(selectDifficulty), 100);
    await selectDifficulty.click();

    await driver
      .findElement(By.css("#__BVID__38 > option[value='Dificil']"))
      .click();

    // limpar
    await driver.findElement(By.css("form .btn")).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
};

exports.closeSidebar = async function () {
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

    // pagina activities
    await driver.findElement(By.id("navActivities")).click();

    await driver
      .findElement(By.css("#backgroundActivities .container .btn"))
      .click(); // abrir filtro

    // opções "dificuldade"
    let selectDifficulty = await driver.findElement(By.id("__BVID__38"));
    // porque é a preciso esperar a sidebar aparecer, faz-se wait until
    await driver.wait(until.elementIsVisible(selectDifficulty), 100);

    // fechar
    await driver.findElement(By.css("#sidebar-right button.close")).click();

    //await driver.quit();
  } catch (error) {
    console.log(error);
  }
};
