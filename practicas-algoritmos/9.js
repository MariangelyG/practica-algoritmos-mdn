/*Encontrar el primer número par mayor que un valor específico:
Planteamiento: Escribe una función que tome un array de números y un valor mínimo como entrada, 
y devuelva el primer número par en el array que sea mayor que el valor mínimo.

Entrada: [5, 7, 8, 10, 12, 15], Valor mínimo: 9
Retorno: 10*/

const firstEvenNumber = (arr, numMayor)=>{
    return arr.find((item)=> item % 2 === 0 && item >= numMayor)
}

console.log(firstEvenNumber([5, 7, 8, 10, 12, 15],9));
