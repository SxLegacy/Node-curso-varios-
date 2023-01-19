/* Usamos la sintaxis ES6 de desestructurar objetos para 
traer la propiedad exec del objeto (librería) child_process */
const { exec } = require("child_process");

/* ejecutaremos un comando de listar directorio (linux) y 
le pasamos tres parámetros */
exec("ls -la", (err, stdout, stderr) => {
	//si da un error el proceso ocurrirá lo siguiente
  if (err) {
    console.error(err);
    return false;
  }
	/* en caso de que todo salga bien se ejecuta la salida normal 
    del proceso */
  console.log(stdout);
});
/* Si queremos por ejemplo ejecutar un proceso de Node como un 
proceso hijo podemos hacerlo de la siguiente manera. */
const { exec } = require("child_process");

exec("node 3_modulos/console.js", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});
