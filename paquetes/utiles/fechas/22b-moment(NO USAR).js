//importamos el modulo
const moment = require('moment');

let ahora = moment();
//establecemos el formato a usar
let ahoraFormat = ahora.format('HH:mm:ss');


console.log(ahoraFormat);