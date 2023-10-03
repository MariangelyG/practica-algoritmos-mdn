/*Saltamontes - Mensaje personalizado
Crea una función que brinde un saludo personalizado. Esta función toma dos parámetros: namey owner.

Utilice condicionales para devolver el mensaje correcto:

caso	                                          devolver
nombre es igual a dueño	                           'Hola jefe'
de lo contrario	                                    'Hola invitado'*/


const greet =(name, owner)=> {
    return name == owner ? 'Hello boss' : 'Hello guest'
  }

  console.log(greet('Daniel', 'Daniel'));
  console.log(greet('Greg', 'Daniel'));
  