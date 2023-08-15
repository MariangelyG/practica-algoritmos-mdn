/*Ejercicio: Encontrar el índice del primer elemento que cumple una condición

Descripción:
Escribe una función llamada encontrarIndice que tome dos parámetros: un array y una función de condición. 
La función debe utilizar el método findIndex() para encontrar el índice del primer elemento del 
array que cumpla con la condición proporcionada por la función. 
La función debe devolver el índice encontrado o -1 si no se encuentra ningún elemento que cumpla la condición.
Instrucciones:
1. Declara una función llamada encontrarIndice que acepte dos parámetros: array y condicion.
2. Dentro de la función, utiliza el método findIndex() del array y pásale la función condicion como argumento. 
Esto buscará el índice del primer elemento del array que cumpla con la condición proporcionada.
3. Devuelve el índice encontrado utilizando la declaración return.*/

const encontrarIndice = (array) =>{
    return array.findIndex(item => item.includes("r"))
}

console.log(encontrarIndice(["melon", "fresa", "cambur", "patilla"]));
