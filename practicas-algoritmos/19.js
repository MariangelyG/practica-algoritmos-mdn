/* encontrar el promedio de los elementos de un array*/

const calculateAverage = (notes) =>{
    return notes.reduce((acc,item)=> acc+item)/notes.length
}

console.log(calculateAverage([12, 13, 15, 17, 19, 20]));


/* Crear una funcion que reciba un array de numeros enteros y retorne un nuevo array donde los elementos
 que se encuentre en el rango de 10 a 15 sean remplazados por la palabra "premio"*/

 const replaceNumbers = (arr)=>{
    return arr.map((item)=> item >= 10 && item <= 15 ? "premio" : item)
 }

 console.log(replaceNumbers([8, 10, 12, 20, 16, 9, 11, 15, 13, 14, 18, 19, 17]));
 
