/*Utilizar el método `map` para multiplicar cada número del array por 2.

Ejemplo de salida:
Array multiplicado por 2: [6, 12, 18, 6, 24, 30, 36, 6]*/



const numeros = [3, 6, 9, 3, 12, 15, 18, 3];


const numerosMultiplicados = (arr) => {
    return arr.map((item)=> item * 2)
}

console.log(numerosMultiplicados(numeros));
