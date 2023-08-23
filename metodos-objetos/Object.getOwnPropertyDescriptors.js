/*Método `getOwnPropertyDescriptors`:
Enunciado: Escribe una función que tome un objeto como entrada, y utilice el método 
`getOwnPropertyDescriptors` para obtener un objeto que contiene todos los descriptores
 de todas las propiedades del objeto.
Entrada: Un objeto.
Salida: Un objeto que contiene todos los descriptores de las propiedades del objeto.

Ejemplo:
Entrada: getOwnPropertyDescriptors({ a: 1, b: 2 })
Salida: { a: { value: 1, writable: true, enumerable: true, configurable: true }, 
b: { value: 2, writable: true, enumerable: true, configurable: true } }*/

const getOwnPropertyDescriptors =(obj)=>{
    return Object.getOwnPropertyDescriptors(obj)
}

console.log(getOwnPropertyDescriptors({ a: 1, b: 2 }));

