function ending() {
	console.log("Terminando proceso... ");
}

function starting(callback) {
	console.log("Hola, soy una función asíncrona callback");
	callback();
}

console.log("Iniciando proceso... ");
starting(ending);

// función de despedida
function chao(nameB) {
	console.log("Adios " + nameB);
}

// función de saludo
function hello(nameA, callback) {
	console.log("Hola " + nameA);
	// callback a la función de despedida
	callback(nameA);
}

hello("Carlos", chao);