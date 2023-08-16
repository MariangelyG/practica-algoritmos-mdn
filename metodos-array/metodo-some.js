/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números enteros y realice las siguientes operaciones:

Ejemplo de entrada:
const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

Utilizar el método `some` para verificar si algún elemento del array es mayor que 10.

Ejemplo de salida:
¿Algún elemento mayor que 10? Sí*/


const numeros = [3, 6, 9, 3, 12, 15, 18, 3]

const verificarElementos = (arr) => arr.some((item) => item > 10)


console.log(verificarElementos(numeros));
