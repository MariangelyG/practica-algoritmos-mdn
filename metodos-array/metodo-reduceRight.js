/*Enunciado:
Escribe una función llamada `operacionesArray` que tome como entrada un array de números enteros y 
realice las siguientes operaciones:

Entrada:
Un array de números enteros.

Ejemplo de entrada:

const numeros = [3, 6, 9, 3, 12, 15, 18, 3];

. Utilizar el método `reduceRight` para restar todos los elementos del array, 
comenzando desde el último elemento y avanzando hacia el primero, y obtener un valor total.
Ejemplo de salida:
Resta de todos los elementos del array: -63*/

const numeros = [3, 6, 9, 3, 12, 15, 18, 3]

const restarElementos = (arr) =>{
    return arr.reduceRight((acc, item)=> acc - item)
}

console.log(restarElementos(numeros));



