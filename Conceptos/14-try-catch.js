function seRompera() {
    return console.log(3 + x); 
  }
  
  function otraFuncion() {
    return seRompera();
  }
  
  try {
    otraFuncion();  
  } catch (error) {
      console.error('Lo siento algo fallo');
      console.error(error.message);
  }
  
  console.log('Otra instrucción');