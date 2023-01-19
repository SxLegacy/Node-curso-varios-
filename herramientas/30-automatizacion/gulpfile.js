/*
  Trabajando automatizacion de procesos con gulp
*/
const gulp = require('gulp');
const server = require('gulp-server-livereload');

/*
  Iniciar una tarea con gulp, usando task que recibe dos parametros
  1. El nombre de la tarea.
  2. Un callback que tambien recibe un callback
*/
gulp.task('build', function(cb){
  console.log('Contruyendo el sitio');
  setTimeout(cb, 1200);
  //aqui hay que crear en package.json el "build": "gulp build",
});

gulp.task('serve', function(cb){
  // creamos servidor
  gulp.src('www')
  // pipe encadena streams
    .pipe(server({ //estas son opcciones de configuracion
      livereload: true, //si arroja error entonces livereload: false
      open: true
      //aqui hay que crear en package.json el "serve": "gulp serve",
    }))
}); //se arranca con npm run serve

// Encadenar tareas
gulp.task('default', gulp.series('build', 'serve'));
//aqui hay que crear en package.json el "start": "gulp",
//se arranca con npm run start y encandena build y serve