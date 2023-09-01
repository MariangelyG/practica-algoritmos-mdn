/*Filtrar números primos:
Planteamiento: Escribe una función que tome un array de números como entrada y 
devuelva un nuevo array que contenga solo los números primos.

Entrada: [2, 3, 4, 5, 6, 7, 8, 9]
Retorno: [2, 3, 5, 7]*/

const filterPrimeNumbers = (arr)=>{
    return arr.filter((item)=> item > 1 && item <= 3 || item % 2 !== 0 && item % 3 !== 0)
}

console.log(filterPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9]));

