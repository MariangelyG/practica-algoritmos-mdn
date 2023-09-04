/*Ordenar palabras alfabéticamente ignorando mayúsculas/minúsculas:
Planteamiento: Escribe una función que tome un array de palabras y las ordene alfabéticamente sin 
tener en cuenta las diferencias entre mayúsculas y minúsculas.

Entrada: ["apple", "banana", "Orange", "grape", "Kiwi"]
Retorno: ["apple", "banana", "grape", "Kiwi", "Orange"]*/

const orderAlphabetically = (arr)=>{
    
    return arr.sort((a,b)=> a.localeCompare(b))
}

console.log(orderAlphabetically(["apple", "banana", "Orange", "grape", "Kiwi"]));

