/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números enteros y
 realice las siguientes operaciones:

Ejemplo de entrada:
const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

Utilizar el método `shift` para eliminar el primer elemento del array original.

Ejemplo de salida:
Array original sin el primer elemento: [6, 9, 3, 12, 15, 18, 3]*/

const numeros = [3, 6, 9, 3, 12, 15, 18, 3]

const eliminarPrimerElemento = (arr)=>{
    let elementoEliminado= arr.shift()
    return arr
}

console.log(eliminarPrimerElemento(numeros));
