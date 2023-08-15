/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números 
enteros y realice las siguientes operaciones:

Entrada:
Un array de números enteros.

Ejemplo de entrada:

const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

Salida:
Los resultados de cada operación realizada en el array.

1. Utilizar el método `lastIndexOf()` para encontrar el índice de la última aparición del número 3 en el array.

Ejemplo de salida:
Índice de la última aparición del número 3: 7*/

const numeros = [3, 6, 9, 12, 15, 18, 2, 3];

const ultimaAparicion = (arr) => arr.lastIndexOf(3)

console.log(ultimaAparicion(numeros));
