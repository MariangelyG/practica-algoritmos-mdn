/*Encontrar el primer múltiplo de un número dado:
Planteamiento: Escribe una función que tome un array de números y un número objetivo como entrada, 
y devuelva el primer número en el array que sea un múltiplo del número objetivo.

Entrada: [5, 10, 15, 20, 25], Número objetivo: 3
Retorno: 15*/

const firstMultiple = (arr, numObj)=>{
    return arr.find((item)=> item % numObj === 0)
}

console.log(firstMultiple([5, 10, 15, 20, 25], 3 ));
