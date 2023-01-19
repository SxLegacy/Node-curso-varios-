/* Función que indica si es verdadero o falso
dependiendo de un número*/
function myFunction(number) {
    return new Promise((resolve, reject) => {
      if (number == 5) {
        resolve();
      } else {
        reject("An error has occurred");
      }
    });
  }
  
  /* Función que saluda */
  function anotherFunction(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hola " + name);
      }, 3000);
      resolve();
    });
  }
  
  /* Llamamos a la promesa myFunction y anidamos a
  la promesa anotherFunction */
  myFunction(5)
    .then(anotherFunction("Sebastian"))
    .then(anotherFunction("Carlos"))
    .then(() => console.log("True"))
      .catch((err) => console.error(err));
  