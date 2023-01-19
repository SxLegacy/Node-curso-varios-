// importamos las propiedades exec y spawn del objeto child_process
const { exec, spawn } = require("child_process");

// generamos un nuevo proceso
let myProcess = spawn("ls", ["-la"]);

console.log(myProcess.pid); //id del proceso, por cada ejecucion sera diferente
console.log(myProcess.connected) //ver el estado del proceso, si esta conectado o no
console.log(myProcess) //ver el proceso internamente

//ORIENTACIÓN A EVENTOS

// Cuando vengan datos, vamos a mostrar el resultado por default del proceso
myProcess.stdout.on("data", function (dato) {
	console.log(process.killed); //Ver si el proceso está muerto
  console.log(dato.toString()); 
});

//Poder ejecutar algo cuando el proceso termine
myProcess.on("exit", () => console.log("El proceso terminó"));