/* Se puede ejecutar un proceso que pronostique cuanto 
debe tardarce en ejecutar algo y asi identificar donde 
hay fallas para corregir y hacer que todo ejecute mas 
rapido */

console.time('todo');
let suma = 0;
console.time('bucle');

for (let i = 0; i < 100000000; i++) {
    suma +=1;
}

console.log(suma);
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2');

for (let j = 0; j < 1000000000; j++) {
    suma2 +=1;
}
console.log(suma2);

console.timeEnd('bucle2');

console.time('asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd('todo');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso asincrono')
            resolve();
        },5000)
    })
}
/* Así podemos entender cuando tarda un codigo en ejecutarce
esto se conoce como benchmarking */
//Pd:Tiempo bucle: 117.268ms Tiempo bucle 2: 1183.055ms 
//Tiempo asincrono 2.5ms