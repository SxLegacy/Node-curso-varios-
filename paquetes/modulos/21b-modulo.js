function saludar1() {
    console.log(`Hola mundo!`)
}

function suma(a, b) { return a + b};
function saludar2(nombre) { return `Hola ${nombre}`}
const PI = 3.14159264

module.exports = {
    saludar1,
    prop1: 'hola k lo k es'
}
module.exports = { suma, saludar2, PI } 