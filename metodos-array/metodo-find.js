/*Ejercicio: Encontrar el primer elemento que cumple una condición

Descripción:
Escribe una función llamada encontrarElemento que tome dos parámetros: un array y una función de condición.
La función debe utilizar el método find() para encontrar el primer elemento del array que cumpla con la condición proporcionada
por la función.
La función debe devolver el elemento encontrado o undefined si no se encuentra ningún elemento que cumpla la condición.

Instrucciones:
1. Declara una función llamada encontrarElemento que acepte dos parámetros: array y condicion.
2. Dentro de la función, utiliza el método find() del array y pásale la función condicion como argumento. 
Esto buscará el primer elemento del array que cumpla con la condición proporcionada.
3. Devuelve el elemento encontrado utilizando la declaración return.

*/

const encontrarElemento = (array) => {
    return array.find(item => item > 10)
}

console.log(encontrarElemento([1, 5, 8, 10, 20]));
