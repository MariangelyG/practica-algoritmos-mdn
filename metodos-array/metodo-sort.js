/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números enteros y realice las siguientes operaciones:

Ejemplo de entrada:
const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

 Utilizar el método `sort` para ordenar los elementos del array original de manera ascendente.

Ejemplo de salida:
Array original ordenado de forma ascendente: [3, 3, 3, 6, 9, 12, 15, 18]*/

const numeros = [3, 6, 9, 3, 12, 15, 18, 3]

const ordenarElementosAscendentes = (arr) =>{
    return arr.sort((a,b)=> a - b)
}

console.log(ordenarElementosAscendentes(numeros));

