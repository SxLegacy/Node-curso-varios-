// Traer nuestro modulo
const modulo = require('./21b-modulo')
const { suma, saludar, PI } = require(...path_module)

// Ejecutar una función del modulo
console.log(modulo)
console.log(modulo.prop1) 
modulo.saludar(); //con esto imprime ambas opciones
// modulo()

suma(3,2)
saludar('Jesuskinto')
console.log(`Pi es un constante y su valor es: ${PI}`)