/*Ejercicio: Rellenar un array con un valor dado

Descripción:
Escribe una función llamada rellenarArray que tome tres parámetros: un array, un valor y una posición inicial.
 La función debe utilizar el método fill() para rellenar el array con el valor dado a partir de la posición inicial. 
 La función debe devolver el array modificado.
 
 Instrucciones:
1. Declara una función llamada rellenarArray que acepte tres parámetros: array, valor y posicionInicial.
2. Dentro de la función, utiliza el método fill() del array y pásale el valor y la posicionInicial como argumentos. Esto rellenará el array con el valor desde la
 posicionInicial hasta el final del array.
3. Devuelve el array modificado utilizando la declaración return.
4. Prueba tu función llamándola con diferentes arrays, valores y posiciones iniciales para verificar que el array se rellena correctamente.
 */


 const rellenarArray = (array, valor, posicionInicial) =>{
    return array.fill(valor, posicionInicial)
 }

 console.log(rellenarArray([1, 2, 3, 4, 5], 2, 1));
 console.log(rellenarArray(['a', 'b', 'c', 'd', 'e'],'a', 1));