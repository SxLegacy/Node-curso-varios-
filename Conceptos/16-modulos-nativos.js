/* Crear un JSON que tendrá que va a compilar como módulo, como se llamará y de donde
se agarra la información */
{
    "targets": [ //objetivos de la compilación 
      {
        "target_name": "addon", //nombre del módulo
        "sources": [ "hello.cc" ] //de que archivo lo sacará
      }
    ]
  }
  