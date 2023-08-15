/*Ejercicio: Encontrar el último índice del elemento que cumple una condición

Descripción:
Escribe una función llamada findLastIndex que tome dos parámetros: un array y una función de condición. 
La función findLastIndex implementará la lógica necesaria para encontrar el último índice del array en el que 
se encuentra un elemento que cumple con la condición proporcionada por la función. 
La función debe devolver el último índice encontrado o -1 si no se encuentra ningún elemento que cumpla la condic

*/

const findLastIndex = (array) =>{
    return array.findLastIndex(element => element.includes("s"))
}

console.log(findLastIndex( ["sapo", "elefante", "cocodrilo", "serpiente"]));
