/*Escribe una función llamada obtenerParesDuplicados que tome como entrada un array de números enteros y devuelva un nuevo 
array con los números pares duplicados.

Entrada:
Un array de números enteros.

Ejemplo de entrada:

const numeros = [1, 2, 3, 4, 5, 6];
Salida:
El array resultante con los números pares duplicados.
[2, 2, 4, 4, 6, 6]*/

const numeros = [1, 2, 3, 4, 5, 6];

const obtenerPares = (arr) =>{
    let copia = [].concat(arr)
    return arr.flatMap((item) => item % 2 === 0 ? [item, item] : [])
}

console.log(obtenerPares(numeros));
