/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números enteros 
y realice las siguientes operaciones:

Ejemplo de entrada:
const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

Utilizar el método `slice` para obtener un nuevo array con los elementos desde el índice 
2 hasta el índice 5 (sin incluir el elemento en el índice 5) del array original.

Ejemplo de salida:
Nuevo array desde el índice 2 hasta el índice 5: [9, 3, 12]*/

const numeros = [3, 6, 9, 3, 12, 15, 18, 3]

const newArrIndicandoInicioYFin = (arr) =>{
    return arr.slice(2, 5)
}

console.log(newArrIndicandoInicioYFin(numeros));
