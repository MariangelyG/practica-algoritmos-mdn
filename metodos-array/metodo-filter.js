/*Ejercicio: Filtrar elementos que cumplan una condición

Descripción:
Escribe una función llamada filtrarElementos que tome dos parámetros: un array y una función de condición.
La función debe utilizar el método filter() para filtrar los elementos del array que cumplan con la condición proporcionada por la función.
 La función debe devolver un nuevo array que contenga solo los elementos que cumplan con la condición.

 Instrucciones:
1. Declara una función llamada filtrarElementos que acepte dos parámetros: array y condicion.
2. Dentro de la función, utiliza el método filter() del array y pásale la función condicion como argumento.
 Esto filtrará los elementos del array según la condición proporcionada.
3. Devuelve el nuevo array filtrado utilizando la declaración return.
*/

const filtrarElementos = (array) =>{
    return array.filter(elemento => elemento.includes("o"))
}

console.log(filtrarElementos(['gato', 'perro', 'elefante', 'raton', 'leon']));
