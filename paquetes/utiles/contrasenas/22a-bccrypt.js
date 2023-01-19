//importamos el modulo
const bcrypt = require('bcrypt');
//declaramos el pass o palabra a encriptar
const password = '1234Segura!';
let passwordHash

bcrypt.hash(password, 5)
    .then(hash => {
        console.log(hash)
        return hash
    })
    .then(hash => {
        return bcrypt.compare(password, hash)
        //bcrypt.compare nos devuelve un boleano si hash y contraseña son iguales
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })