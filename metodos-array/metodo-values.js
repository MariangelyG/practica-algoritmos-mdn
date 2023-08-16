/*Algoritmo:

Crear un nuevo array.
Iterar a través del array original y agregar cada valor al nuevo array.
Devolver el nuevo array.

Entrada:

const arr = [1, 2, 3, 4, 5];
Salida:

[1, 2, 3, 4, 5]
Como puede ver, el método values() devuelve un nuevo array que contiene los valores del array original+*/

const array1 = [1, 2, 3, 4, 5];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}


// const values = (arr)=> {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       newArr.push(arr[i]);
//     }
//     return newArr;
//   }

//   console.log(values([1, 2, 3, 4, 5]));
  
