/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números enteros y realice las siguientes operaciones:

Entrada:
Un array de números enteros.

Ejemplo de entrada:

const numeros = [3, 6, 9, 3, 12, 15, 18, 3];
6. Utilizar el método `reduce` para sumar todos los elementos del array y obtener un valor total.

Ejemplo de salida:
Suma de todos los elementos del array: 69*/


const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

const sumarTodosLosElementos = (arr)=>{
    return arr.reduce((acc, item) => acc + item)
}

console.log(sumarTodosLosElementos(numeros));
