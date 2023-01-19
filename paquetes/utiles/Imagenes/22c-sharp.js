//importamos el modulo
const sharp = require('sharp');
//ruta de la imagen a modificar
sharp('fondo-carro.jpg')
//scalamos la imagen a 500 de alto
  .resize(500)
//otorgamos una escala de grises
  .grayscale()
//generamos el archivo modificado
  .toFile('fondo-carro-small.jpg');