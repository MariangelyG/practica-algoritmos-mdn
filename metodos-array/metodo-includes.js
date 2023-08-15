/*Un array de números enteros y un número objetivo.

Ejemplo de entrada:
const numeros = [1, 2, 3, 4, 5];
const objetivo = 3;
Salida:
true si el número objetivo está presente en el array, o false en caso contrario.

Ejemplo de salida (para la entrada de ejemplo):
true*/

const numeros = [1, 2, 3, 4, 5]

const buscarNumero = (arr) => arr.includes(2)

console.log(buscarNumero(numeros));
