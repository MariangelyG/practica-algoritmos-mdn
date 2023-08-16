/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números enteros y 
realice las siguientes operaciones:

Entrada:
Un array de números enteros.

Ejemplo de entrada:

const numeros = [3, 6, 9, 3, 12, 15, 18, 3];
Utilizar el método `pop` para eliminar el último elemento del array original.

Ejemplo de salida:

Array original sin el último elemento: [3, 6, 9, 3, 12, 15, 18]*/


const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

const eliminarUltimoElemento = (arr)=>{
let ultimoElemento = arr.pop()
return arr
}

console.log(eliminarUltimoElemento(numeros));
