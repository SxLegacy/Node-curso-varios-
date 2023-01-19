const http = require ("http") // importamos el modulo
// es recomenado no inicializar la funcion aqui por los callbacks
http.createServer( (req,res) => { // se le da 2 parametros request y response
	console.log("nueva peticion") 
	console.log(req.url) // imprime la url de la petición
	 
    // escribir en la cabezara 
    res.writeHead(201, {'Content-Type': 'text/plain'});  
	res.writeHead(201, { 'content-type': 'text/html; charset=utf-8'}); // codigo de autenticación y el tipo de contentido	
	
    //escribir respuesta al usuario
	res.write("hola ya se responderte")
	
	res.end();
    switch (req.url) {
        case '/hola':
            res.write('\n\rHola desde la ruta'+ req.url);
            res.end();
            break;
        default:
            res.write('\n\rError 404');
            res.end();

    }
}).listen(3000); // terminamos la petición y ponemos el puerto

console.info('escuchando 3000');