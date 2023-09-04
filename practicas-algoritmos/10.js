/*Encontrar el índice del primer número divisible por un número dado:
Planteamiento: Escribe una función que tome un array de números y un número divisor como entrada, 
y devuelva el índice del primer número en el array que sea divisible por el número divisor.

Entrada: [15, 25, 30, 35, 40], Número divisor: 5
Retorno: 1*/


const indexNumDivisible = (arr, numDivisor)=>{
   return arr.findIndex((item)=> item / numDivisor === numDivisor)
}
  
console.log(indexNumDivisible([15, 25, 30, 35, 40], 5));
