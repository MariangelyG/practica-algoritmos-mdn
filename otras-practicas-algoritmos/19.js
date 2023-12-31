/*Múltiplo de índice
Devuelve una nueva matriz que consta de elementos que son múltiplos de su propio índice en la matriz de entrada 
(longitud > 1).*/

const multipleOfIndex = (array)=> {
    
    return array.filter((item, index, arr)=> item % index === 0 || item == 0)
  }

  console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
  console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
  console.log(multipleOfIndex([11, -11]));
  console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]));
  console.log(multipleOfIndex([0, 2, 3, 6, 9]));
  
  
  