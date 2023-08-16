/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números enteros
y realice las siguientes operaciones:

Entrada:
Un array de números enteros.

Ejemplo de entrada:

const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

5. Utilizar el método `push` para agregar el número 30 al final del array original.

Ejemplo de salida:
Array original con el número 30 al final: [3, 6, 9, 3, 12, 15, 18, 3, 30]

*/
const numeros = [3, 6, 9, 3, 12, 15, 18, 3]

const agregarElemento=(arr)=>{
let agregar = arr.push(30)
return arr
}

console.log(agregarElemento(numeros));
