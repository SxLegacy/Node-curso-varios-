/*
  Entendiendo web scrapping con puppeteer...
  Funciona de forma asincrona
*/
const puppeteer = require('puppeteer');

// Creamos una expresión = Funcion autoejecutable
(async () => {
  console.log('Lanzar el navegador');
  // const browser = await puppeteer.launch();
  /*
    {headless: false} lo que hace es que el navegador no
    se lance en segundo plano, es decir podemos verlo
  */
  const browser = await puppeteer.launch({headless: false});
  // Abrir una pagina en el navegador
  const page = await browser.newPage();
  // Ir a una pagina
  await page.goto('https://wikipedia.org/wiki/Node.js');
  /*
    Ejecutar un script, con page.evaluate,
    lo que hace es evaluar lo que le digamos dentro de la pagina y
    devolver el resultado
  */
  //Imprimimos nuestro resultado
  const titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1.innerHTML;
  });
  console.log(titulo1);
  // Usamos browser.close para cerrar el navegador despues 
  //de haber extraido los datos;
  console.log('Cerrando el navegador');
  browser.close();
  console.log('Navegador cerrado');

})();