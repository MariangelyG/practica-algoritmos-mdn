/*Matrices de suma
Escribe una función que tome una matriz de números y devuelva la suma de los números. 
Los números pueden ser negativos o no enteros. Si la matriz no contiene ningún número, entonces deberías devolver 0.

Ejemplos
Entrada: [1, 5.2, 4, 0, -1]
Salida:9.2*/

const sum = (numbers) => {
    return numbers.reduce((acc,item)=> acc+item,0)
};

console.log(sum([1, 5.2, 4, 0, -1]));
