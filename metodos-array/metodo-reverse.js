/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números enteros y 
realice las siguientes operaciones:

Entrada:
Un array de números enteros.

Ejemplo de entrada:

const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

Utilizar el método `reverse` para invertir el orden de los elementos del array original.

Ejemplo de salida:
Array original invertido: [3, 18, 15, 12, 3, 9, 6, 3]*/

const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

const invertirOrden = (arr) =>{
    return arr.reverse()
}

console.log(invertirOrden(numeros));


