/*¡Suma de mínimos!
Dada una lista 2D (anidada) (matriz, vector, ...) de tamaño m * n, su tarea es encontrar la suma de 
los valores mínimos en cada fila.
Por ejemplo:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
Entonces la función debería regresar 26porque la suma de los mínimos es 1 + 5 + 20 = 26.
Nota: Siempre se le proporcionará una lista no vacía que contiene valores positivos.*/

const sumOfMinimums = (arr)=> {
  return arr.map((item)=> Math.min(...item)).reduce((acc, item)=> acc+item,0)
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));
