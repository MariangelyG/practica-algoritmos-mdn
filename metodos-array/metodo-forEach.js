/*Enunciado:
Escribe una función llamada imprimirDobles que tome como entrada un array de números enteros y que imprima por consola cada 
número multiplicado por 2.

Entrada:
Un array de números enteros.

Ejemplo de entrada:
const numeros = [1, 2, 3, 4, 5];
Salida:
Imprimir por consola cada número del array multiplicado por 2.

Ejemplo de salida (para la entrada de ejemplo):
2, 4, 6, 8, 10 */

const numeros = [1, 2, 3, 4, 5]

    const imprimirDobles = (arr) => {
      return arr.forEach((item) => {
        const result = item * 2
        console.log(result);
      })
      }

console.log(imprimirDobles([1, 2, 3, 4, 5]));
