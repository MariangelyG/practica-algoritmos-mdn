/*
Determina si todos los elementos en el array satisfacen una condición.
Ejercicio: Verificar si todos los elementos cumplen una condición

Descripción:
Escribe una función llamada verificarCondicion que tome dos parámetros: un array y una función de condición. 
La función debe utilizar el método every() para verificar si todos los elementos del array cumplen la condición proporcionada 
por la función de condición. La función debe devolver true si todos los elementos cumplen la condición y false en caso contrario.

Instrucciones:
1. Declara una función llamada verificarCondicion que acepte dos parámetros: array y condicion.
2. Dentro de la función, utiliza el método every() del array y pásale la función condicion como argumento. 
Esto verificará si todos los elementos del array cumplen la condición proporcionada por la función.
3. Devuelve el resultado de every() utilizando la declaración return.
4. Prueba tu función llamándola con diferentes arrays y funciones de condición para verificar que devuelve el resultado esperado.

*/

   let numPar= [2, 4, 6, 8, 10];
   let numImpar= [1, 3, 5, 6];

   const verificarCondicion = (array) =>{

      return array.every((condicion) => condicion % 2 === 0) 
   }

console.log(verificarCondicion(numPar));
console.log(verificarCondicion(numImpar));


