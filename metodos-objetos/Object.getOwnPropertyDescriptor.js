/*Método `getOwnPropertyDescriptor`:
Enunciado: Crea una función que tome un objeto y un nombre de propiedad como entrada,
 y utilice el método `getOwnPropertyDescriptor` para obtener el descriptor de la propiedad 
 especificada.
Entrada: Un objeto y un nombre de propiedad.
Salida: El descriptor de la propiedad especificada.

Ejemplo:
Entrada: getOwnPropertyDescriptor({ a: 1 }, "a")
Salida: { value: 1, writable: true, enumerable: true, configurable: true }*/

const getOwnPropertyDescriptor = (obj, nombre)=>{
    return Object.getOwnPropertyDescriptor(obj, nombre)
}

console.log(getOwnPropertyDescriptor({ a: 1 }, "a"));
