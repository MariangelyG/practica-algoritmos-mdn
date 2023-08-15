/*Ejercicio: Encontrar el último elemento que cumple una condición

Descripción:
Escribe una función llamada encontrarUltimoElemento que tome dos parámetros: un array y una función de condición. 
La función debe implementar la lógica para encontrar el último elemento del array que cumpla con la condición proporcionada por la función. 
La función debe devolver el último elemento encontrado o undefined si no se encuentra ningún elemento que cumpla la condición.

*/

const encontrarUltimoElemento = (array) =>{
    return array.findLast(element => element > 10)
}

console.log(encontrarUltimoElemento([1, 5, 8, 10, 20]));