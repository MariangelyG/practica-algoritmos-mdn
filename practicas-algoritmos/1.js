/*Duplicar los números en un array:
Planteamiento: Escribe una función que tome un array de números como entrada y devuelva un nuevo 
array donde cada número se haya duplicado.

Entrada: [3, 5, 7, 9]
Retorno: [6, 10, 14, 18]*/

const doubleNum = (arr) =>{
    return arr.map((item)=> item *2)
}

console.log(doubleNum([3, 5, 7, 9]));

