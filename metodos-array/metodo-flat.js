/*Ejercicio: Aplanar un array

Descripción:
Escribe una función llamada aplanarArray que tome un parámetro array y utilice el método flat() para aplanar el array a una 
sola dimensión.

Instrucciones:
1. Declara una función llamada aplanarArray que acepte un parámetro array.
2. Dentro de la función, utiliza el método flat() del array para aplanar el array a una sola dimensión.
3. Devuelve el array aplanado utilizando la declaración return.
*/

const aplanarArray = (array) =>{
    return array.flat(2)
}

console.log(aplanarArray([1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]));

console.log(aplanarArray(["avion", "celular", ["zapato", "pc"]]))
