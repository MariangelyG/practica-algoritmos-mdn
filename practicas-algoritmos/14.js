/*Ordenar números por cantidad de dígitos de manera ascendente:
Planteamiento: Escribe una función que tome un array de números y los ordene de manera ascendente 
según la cantidad de dígitos que tienen.

Entrada: [10, 7, 345, 23, 12, 4567]
Retorno: [7, 10, 23, 12, 345, 4567]*/

const sortQuantityDigits = (arr)=>{
    return arr.sort((a,b)=> a.toString().length - b.toString().length)
}

console.log(sortQuantityDigits([10, 7, 345, 23, 12, 4567]));

