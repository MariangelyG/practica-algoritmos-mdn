/*Enunciado:
Escribe una función llamada encontrarIndice que tome como entrada un array de números enteros y un número objetivo,
y devuelva el índice de la primera aparición del número objetivo en el array. Si el número objetivo no está presente en el array, 
la función debe devolver -1.

Entrada:
Un array de números enteros y un número objetivo.
Ejemplo de entrada:
const numeros = [1, 2, 3, 4, 5];
const objetivo = 3;
Salida:
El índice de la primera aparición del número objetivo en el array, o -1 si no está presente.

Ejemplo de salida (para la entrada de ejemplo):
2*/

const numeros = [1, 2, 3, 4, 5]
const encontrarIndice = (arr) => arr.indexOf(3)

console.log(encontrarIndice(numeros));
