/*Método `preventExtensions`:
Enunciado: Escribe una función que tome un objeto como entrada, y utilice el método `preventExtensions` 
para hacer que el objeto sea no extensible, es decir, no se le pueden agregar nuevas propiedades.
Entrada: Un objeto.
Salida: El mismo objeto, pero no extensible.

Ejemplo:
Entrada: preventExtensions({ a: 1, b: 2 })
Salida: El objeto original, pero no extensible.*/

const preventExtensions = (obj)=>{
    return Object.preventExtensions(obj)
}

console.log(preventExtensions({ a: 1, b: 2 }));
