/*¿Son extrañas las funciones de flecha?
¡Es hora de poner a prueba tus conocimientos básicos en funciones! Devuelve las probabilidades de una lista:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []*/


const odds = (values) =>{
    return values.filter((item)=> item % 2 !== 0)
  }

  console.log(odds([]));
  console.log(odds([2, 4, 6]));
  console.log(odds([1, 3, 5]));
  console.log(odds([1, 2, 3, 4, 5, 6]));
  