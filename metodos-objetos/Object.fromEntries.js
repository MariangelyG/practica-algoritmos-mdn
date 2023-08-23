/*Método `fromEntries`:
Enunciado: Escribe una función que tome un arreglo de arreglos [key, value] 
como entrada, y utilice el método `fromEntries` para crear un objeto a partir
 de los pares de clave-valor del arreglo.
Entrada: Un arreglo de arreglos [key, value].
Salida: Un objeto creado a partir de los pares de clave-valor.

Ejemplo:
Entrada: fromEntries([["a", 1], ["b", 2]])
Salida: { a: 1, b: 2 }*/


const fromEntries = (obj)=>{
    return Object.fromEntries(obj)
}

console.log(fromEntries([["a", 1], ["b", 2]]));
